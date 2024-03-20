import React, { useEffect, useState } from 'react';
import './css/batches.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useLocation, useNavigate } from 'react-router-dom';


function Batches() {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [batchData, setBatchData] = useState({
        name: '',
        program: '',
        status: '',
        startmonth: '',
        startyear: '',
        batchcode: '',
        endmonth: '',
        endyear: '',
    });
    const [selectedBatch, setSelectedBatch] = useState(null);
    const [records, setRecords] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBatch(null);
        clear();
    };

    const actionsBodyTemplate = (rowData) => {
        return (
            <div className='action'>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => edit(rowData)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(rowData.id)} />
                <FontAwesomeIcon icon={faLayerGroup} onClick={() => handlefetch(rowData)} />
            </div>
        );
    };


    const clear = () => {
        setBatchData({
            name: '',
            program: '',
            status: '',
            startmonth: '',
            startyear: '',
            batchcode: '',
            endmonth: '',
            endyear: '',
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/batches");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setRecords(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBatchData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = 'http://localhost:3000/batches';

        try {
            if (selectedBatch) {
                // Editing existing batch
                const editUrl = `${apiUrl}/${selectedBatch.id}`;
                const response = await fetch(editUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(batchData),
                });

                if (!response.ok) {
                    throw new Error('Failed to edit batch');
                }
            } else {
                // Adding new batch
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(batchData),
                });

                if (!response.ok) {
                    throw new Error('Failed to add batch');
                }
            }

            const updatedResponse = await fetch(apiUrl);
            const updatedData = await updatedResponse.json();

            setData(updatedData);
            setRecords(updatedData);
            closeModal();
        } catch (error) {
            console.error(`${selectedBatch ? 'Error editing' : 'Error adding'} batch:`, error);
            // You can add toast notifications or other error handling here
        }
    };

    const edit = (batch) => {
        setSelectedBatch(batch);
        setBatchData(batch);
        openModal();
    };

    const handleDelete = async (id) => {
        try {
            const apiUrl = `http://localhost:3000/batches/${id}`;
            const response = await fetch(apiUrl, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete batch');
            }

            const updatedResponse = await fetch("http://localhost:3000/batches");
            const updatedData = await updatedResponse.json();

            setData(updatedData);
            setRecords(updatedData);
        } catch (error) {
            console.error('Error deleting batch:', error);
            // You can add toast notifications or other error handling here
        }
    };


    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const statusParam = searchParams.get('status');
        const programParam = searchParams.get('program');

        setSelectedStatus(statusParam || '');
        setSelectedProgram(programParam || '');
    }, [location.search]);

    useEffect(() => {
        let filteredData = data;

        if (selectedProgram && selectedStatus) {
            filteredData = filteredData.filter(item => item.program === selectedProgram && item.status === selectedStatus);
        }

        else if (selectedProgram) {
            filteredData = filteredData.filter(item => item.program === selectedProgram);
        }

        else if (selectedStatus) {
            filteredData = filteredData.filter(item => item.status === selectedStatus);
        }


        setRecords(filteredData);
    }, [selectedProgram, selectedStatus, data]);


    const navigate = useNavigate();
    const handlefetch = (program) => {
        navigate(`/batchuser?status=${program.status}&program=${program.program}&batch=${program.name}`);
    };



    const handleSearchbatches = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecords = data.filter(item =>
            item.id === parseInt(searchTerm) ||
            item.name.toLowerCase().includes(searchTerm) ||
            item.program.toLowerCase().includes(searchTerm) ||
            item.status.toLowerCase().includes(searchTerm) ||
            item.startmonth.toLowerCase().includes(searchTerm) ||
            item.startyear.toLowerCase().includes(searchTerm) ||
            item.batchcode.toLowerCase().includes(searchTerm) ||
            item.endmonth.toLowerCase().includes(searchTerm) ||
            item.endyear.toLowerCase().includes(searchTerm)
        );
        setRecords(filteredRecords);
    };

    return (
        <div className='batches'>
            <div className='header-batches'>
                <h2>Batches</h2>
            </div>
            <div className='align-batches'>
                <form>
                    <label>Filter By Status
                        <Select
                            name="status"
                            onChange={(value) => {
                                if (value.value === 'status') {
                                    setSelectedStatus(null);
                                   
                                } else {
                                    setSelectedStatus(value.value); 
                                   
                                }
                            }}
                            options={[
                                { value: 'status', label: 'Select Status' },
                                ...records.map(item => ({ value: item.status, label: item.status })),

                            ].filter(option => option.value !== '').filter((v, i, a) => a.findIndex(t => (t.value === v.value)) === i)}
                            placeholder="Select Status"
                            isSearchable={true}
                            value={records.map(item => ({ value: item.status, label: item.status })).find(option => option.value === selectedProgram)}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    width: '200px', // Adjust the width as per your requirement
                                }),
                            }}
                        />

                    </label>
                    <label className='fbs'>Filter By Program
                        <Select
                            name="program"
                            onChange={(value) => {
                                if (value.value === 'program') {
                                    setSelectedProgram(null); // Set selectedStatus to empty string
                                } else {
                                    setSelectedProgram(value.value); // Set selectedStatus to the selected value
                                }
                            }}
                            options={[
                                { value: 'program', label: 'Select Status' },
                                ...records.map(item => ({ value: item.program, label: item.program }))
                            ].filter(option => option.value !== '').filter((v, i, a) => a.findIndex(t => (t.value === v.value)) === i)}
                            placeholder="Select Program"
                            isSearchable={true}
                            value={records.map(item => ({ value: item.program, label: item.program })).find(option => option.value === selectedProgram)}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    width: '200px', // Adjust the width as per your requirement
                                }),
                            }}
                        />

                    </label>
                </form>
                <button className='btn' onClick={openModal}>
                    + Add Batch
                </button>
            </div>
            <div >
                <div className='entry'>
                    <div className='entries'>
                        <p>Show </p>
                        <p className='p'>Entries</p>
                    </div>

                    <div className='input_search'>
                        <label>
                            Search <input type="text" onChange={handleSearchbatches} />
                        </label>
                    </div>
                </div>
                <DataTable value={records} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" >
                    <Column field='id' header='Sr. No.' sortable />
                    <Column field='name' header='Name' sortable />
                    <Column field='program' header='Program' sortable />
                    <Column field='status' header='Status' sortable />
                    <Column field='startmonth' header='Start Month' sortable />
                    <Column field='startyear' header='Start Year' sortable />
                    <Column field='batchcode' header='Batch Code' sortable />
                    <Column field='endmonth' header='End Month' sortable />
                    <Column field='endyear' header='End Year' sortable />
                    <Column body={actionsBodyTemplate} header='Action' sortable="false" />
                </DataTable>
            </div>
            <div className='modal-batches'>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    contentLabel='Add Batch Modal'
                    className='ModalContent-batches'
                    overlayClassName='ModalOverlay'
                >
                    <div className='flex'>
                        <p>{selectedBatch ? 'Edit Batch' : 'Add Batch'}</p>
                        <button type='button' onClick={closeModal}>
                            &#x26CC;
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name
                            <select
                                name='name'
                                value={batchData.name}
                                onChange={handleChange}
                                required
                            >
                                <option >Select Name</option>
                                <option>Batch1</option>
                                <option>Batch2</option>
                                <option>Batch3</option>
                            </select>

                        </label>
                        <label>
                            Program
                            <input
                                type='text'
                                name='program'
                                value={batchData.program}
                                onChange={handleChange}
                                placeholder='Enter Program'
                                required
                            />
                        </label>
                        <label>
                            Status
                            <select
                                name="status"
                                value={batchData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Completed">Completed</option>
                                <option value="Not-completed">Not Completed</option>
                            </select>
                        </label>
                        <label>
                            Start Month
                            <select name="startmonth" onChange={handleChange} value={batchData.startmonth}>
                                <option value="">Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </label>

                        <label>
                            Start Year

                            <input
                                type="number"
                                min="1900"
                                max="2099"
                                step="1"
                                name='startyear'
                                value={batchData.startyear}
                                onChange={handleChange}
                                placeholder='Enter Start Year'
                                required
                            />


                        </label>

                        <label>
                            Batch Code
                            <input
                                type='text'
                                name='batchcode'
                                value={batchData.batchcode}
                                onChange={handleChange}
                                placeholder='Enter Batch Code'
                                required
                            />
                        </label>
                        <label>
                            End Month
                            <select name="endmonth" onChange={handleChange} value={batchData.endmonth}>
                                <option value="">Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </label>
                        <label>
                            End Year
                            <input type="number" min="1900" max="2099" step="1" name='endyear'
                                value={batchData.endyear}
                                onChange={handleChange}
                                placeholder="Enter End Year" />

                        </label>
                        <div className='flex'>
                            <button type='reset' onClick={clear}>
                                Clear
                            </button>
                            <button type='submit'>
                                {selectedBatch ? 'Update' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default Batches;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Main/Products';
import Main from './Main';
import DetailsProduct from './Main/DetailsProduct';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
      </Routes>
    </BrowserRouter>
     
    </div>

  );
}

export default App;

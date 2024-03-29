import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../images/1.avif';
import img2 from '../images/2.avif';
import img3 from '../images/3.avif';
import img4 from '../images/4.avif';
import img5 from '../images/5.avif';
import marquee from '../images/marquee.gif'
import './content.css';
import c1_1 from '../images/c1_1.webp';
import c1_2 from '../images/c1_2.avif';
import c1_3 from '../images/c1_3.jpg';
import c1_4 from '../images/c1_4.jpg';
import c1_5 from '../images/c1_5.webp';
import c1_6 from '../images/c1_6.avif';
import c1_7 from '../images/c1_7.avif';
import cashbank from '../images/cashback.avif';
import cashbank1 from '../images/cashback1.avif';
import cashbank2 from '../images/cashback2.avif';
import cashbank3 from '../images/cashback3.avif';
import cashbank4 from '../images/cashback4.avif';
import cashbank5 from '../images/cashback5.avif';
import cashbank6 from '../images/cashback6.avif';
import offer1 from '../images/offer.gif';
import offer2 from '../images/offer.avif';
import fashion1 from '../images/fashion1.avif';
import fashion2 from '../images/fashion2.avif';
import fashion3 from '../images/fashion3.gif';
import c11 from '../images/c11.avif'
import c12 from '../images/c12.avif'
import c13 from '../images/c13.avif'
import c14 from '../images/c14.avif'
import c15 from '../images/c15.avif'
import c16 from '../images/c16.avif'
import c17 from '../images/c17.avif'
import trust from '../images/trust.webp'
import fashion_steals from '../images/fashion_steals.avif'
import f1 from '../images/top_steals1.avif'
import f2 from '../images/top_steals2.avif'
import f3 from '../images/top_steals3.avif'
import f4 from '../images/top_steals4.avif'
import f5 from '../images/top_steals5.jpg'
import delivery from '../images/delivery.gif'
import discount from '../images/discount.gif'
import deals from '../images/deals.gif'
import d1 from '../images/d1.avif'
import d2 from '../images/d2.avif'
import d3 from '../images/d3.webp'
import d4 from '../images/c4.webp'
import d5 from '../images/d5.webp'
import meet_sponsors from '../images/meet_sponsors.avif'
import b1 from '../images/puma.avif'
import b2 from '../images/us_polo.avif'
import b3 from '../images/ritu_kumar.avif'
import b4 from '../images/lenskart.avif'
import b5 from '../images/whpjewellery.avif'
import b6 from '../images/jocky.avif'
import b7 from '../images/timex.avif'
import b8 from '../images/portico.avif'
import b9 from '../images/max.avif'
import winners from '../images/winners.avif'
import k_k from '../images/kurtas_kurtis.avif'
import t_shirts from '../images/t_shirts.avif'
import tops from '../images/tops.avif'
import shirts from '../images/shirts.avif'
import jeans from '../images/jeans.avif'
import track from '../images/track_paints.avif'
import trousers from '../images/trousers.avif'
import shorts from '../images/shorts.avif'
import dress from '../images/dress.avif'
import flip from '../images/flip_flops.avif'
import sports from '../images/sports_shoes.avif'
import formal from '../images/formal_shoes.avif'
import exclusives from '../images/exclusives.avif'
import rose from '../images/rose.avif'
import netplay from '../images/netplay.avif'
import teamspirit from '../images/teamspirit.avif'
import gap from '../images/gap.avif'
import superdry from '../images/superdry.avif'
import lee_cooper from '../images/lee_cooper.avif'
import steve_madden from '../images/steve_madden.avif'
import azorte from '../images/azorte.avif'
import perfomax from '../images/perfomax.avif'
import john_players from '../images/john_players.avif'
import star from '../images/star.gif'
import daily from '../images/daily.webp'
import s1 from '../images/s1.avif'
import s2 from '../images/s2.avif'
import s3 from '../images/s3.avif'
import s4 from '../images/s4.avif'
import s5 from '../images/s5.avif'
import last_call from '../images/last_call.avif'
import mens_w from '../images/mens_w.avif'
import women_w from '../images/women_w.avif'
import women_e from '../images/women_e.avif'
import tranding_e from '../images/tranding_e.avif'
import kidsware from '../images/kidsware.avif'
import a_m from '../images/a&m.avif'
import h_d from '../images/h&d.avif'
import hot_deals from '../images/hot_deals.avif'
import bedsheets from '../images/bedsheets.avif'
import beauty from '../images/beauty.avif'
import handbags from '../images/handbags.avif'
import watches from '../images/watches&sg.avif'
import v_w from '../images/bels&wallets.avif'
import caps from '../images/caps.avif'
import innerwear from '../images/innerwear.avif'
import fashion_je from '../images/fashion&je.avif'
import ss_24 from '../images/ss_24.avif'
import mind_20_1 from '../images/mind_20_1.webp'
import mind_20_2 from '../images/mind_20_2.webp'
import upto_30_1 from '../images/upto_30_1.avif'
import upto_30_2 from '../images/upto_30_2.avif'
import upto_30_3 from '../images/upto_30_3.jpg'
import explore_all from '../images/explore_all.avif'
import scoring from '../images/scoring.webp'
import crocs from '../images/crocs.avif'
import jack_jones from '../images/jack_jones.avif'
import rebook from '../images/rebook.avif'
import ax from '../images/ax.avif'
import superdry1 from '../images/superdry1.avif'
import gap1 from '../images/gap1.avif'
import uspolo1 from '../images/uspolo1.avif'
import gas from '../images/gas.avif'
import thebear from '../images/thebear.avif'
import snitch from '../images/snitch.avif'
import fashor from '../images/fashor.avif'
import brocks from '../images/brocks.avif'
import kotty from '../images/kotty.avif'
import blues from '../images/blues.avif'
import clarks from '../images/clarks.avif'
import steve from '../images/steve.avif'
import c18 from '../images/coolest.gif'
import c19 from '../images/upto_40.avif'
import c20 from '../images/upto_50.webp'
import c21 from '../images/min_50.avif'
import c22 from '../images/upto_60.avif'
import c23 from '../images/40_70.avif'
import explore_more from '../images/explore_more.avif'
import r1 from '../images/r1.avif'
import r2 from '../images/r2.webp'
import r3 from '../images/r3.avif'
import r4 from '../images/r4.webp'
import r5 from '../images/r5.avif'
import r6 from '../images/r7.webp'
import r7 from '../images/r8.avif'
import r8 from '../images/r9.avif'
import r9 from '../images/r10.avif'
import v1 from '../images/picks.webp'
import v2 from '../images/min_40.avif'
import v3 from '../images/min_501.avif'
import v4 from '../images/50_80.avif'
import v5 from '../images/min_402.avif'
import v6 from '../images/min_35.avif'
import k1 from '../images/crazy_reductions.gif'
import k2 from '../images/min_60.avif'
import k3 from '../images/flat_70.avif'
import k4 from '../images/min_502.avif'
import k5 from '../images/min_601.avif'
import k6 from '../images/min_602.avif'
import k7 from '../images/min_55.avif'
import k8 from '../images/min_603.avif'
import h1 from "../images/colour_drench.avif"
import h2 from '../images/h1.jpg'
import h3 from '../images/h2.avif'
import h4 from '../images/h3.webp'
import h5 from '../images/h4.jpg'
import z1 from "../images/hots_picks.avif"
import z2 from '../images/h5.jpg'
import z3 from '../images/h6.avif'
import z4 from '../images/h7.avif'
import z5 from '../images/h8.avif'
import z6 from '../images/h9.avif'
import z7 from '../images/z1.avif'
import z8 from '../images/z2.avif'
import z9 from '../images/z3.avif'
import z10 from '../images/z4.avif'
import z11 from '../images/z5.avif'
import z12 from '../images/z6.avif'
import z13 from '../images/z7.avif'
import z14 from '../images/z8.avif'
import z15 from '../images/beautyall.avif'
import z16 from '../images/x1.avif'
import z17 from '../images/x2.avif'
import z18 from '../images/x3.avif'
import z19 from '../images/x4.avif'
import z20 from '../images/x5.avif'
import z21 from '../images/x6.avif'
import z22 from '../images/x7.avif'
import z23 from '../images/y1.avif'
import z24 from '../images/y2.webp'
import z25 from '../images/y3.avif'
import z26 from '../images/y4.avif'
import z27 from '../images/y5.avif'
import z28 from '../images/y6.avif'
import z29 from '../images/y7.avif'
import z30 from '../images/y8.avif'
import z31 from '../images/y9.avif'
import z32 from '../images/y10.avif'
import z33 from '../images/y11.avif'
import z34 from '../images/y12.avif'
import z35 from '../images/y13.avif'
import z36 from '../images/y14.webp'
import z37 from '../images/y15.avif'
import z38 from '../images/y16.webp'
import z39 from '../images/y17.webp'
import z40 from '../images/ca1.webp'
import z41 from '../images/ca2.avif'
import z42 from '../images/ca3.avif'
import z43 from '../images/ca4.gif'
import gift from '../images/gift.gif'
import w1 from '../images/w1.avif'
import w2 from '../images/w2.avif'
import w3 from '../images/w3.avif'
import w4 from '../images/w4.avif'
import w5 from '../images/w5.avif'
import w6 from '../images/w6.avif'
import w7 from '../images/w7.avif'
import w8 from '../images/w8.avif'
import w9 from '../images/w9.avif'
import e1 from '../images/e1.avif'
import e2 from '../images/e2.avif'
import e3 from '../images/e3.avif'
import e4 from '../images/e4.avif'
import e5 from '../images/e5.avif'
import e6 from '../images/e6.avif'
import e7 from '../images/e7.avif'
import e8 from '../images/e8.avif'
import e9 from '../images/e9.avif'
import e10 from '../images/e10.avif'
import fa1 from '../images/f1.avif'
import fa2 from '../images/f2.avif'
import fa3 from '../images/f3.avif'
import fa4 from '../images/f4.avif'
import fa5 from '../images/f5.avif'
import fa6 from '../images/f6.avif'
import fa7 from '../images/f7.avif'
import fa8 from '../images/f8.avif'
import ba1 from '../images/b1.avif'
import ba2 from '../images/b2.avif'
import ba3 from '../images/b3.avif'
import ba4 from '../images/b4.avif'
import ba5 from '../images/b5.avif'
import ba6 from '../images/b6.webp'
import ba8 from '../images/b8.avif'
import ba9 from '../images/b9.avif'
import ka1 from '../images/k1.avif'
import ka2 from '../images/k2.avif'
import ka3 from '../images/k3.avif'
import ka4 from '../images/k4.avif'
import ka5 from '../images/k5.avif'
import ka6 from '../images/k6.avif'
import l1 from '../images/l1.gif'
import l2 from '../images/l2.avif'
import l3 from '../images/l3.avif'
import l4 from '../images/l4.avif'
import l5 from '../images/l5.webp'
import l6 from '../images/l6.webp'
import l7 from '../images/l7.webp'
import l8 from '../images/l8.avif'
import l9 from '../images/l9.webp'
import l10 from '../images/l10.webp'
import l11 from '../images/l11.avif'
import sa1 from '../images/sa1.avif'
import sa2 from '../images/sa2.avif'
import sa3 from '../images/sa3.avif'
import sa4 from '../images/sa4.avif'
import sa5 from '../images/sa5.avif'
import sa6 from '../images/sa6.webp'
import sa7 from '../images/sa7.avif'
import sa8 from '../images/sa8.avif'
import za1 from '../images/za1.avif'
import za2 from '../images/za2.jpg'
import za3 from '../images/za3.avif'
import za4 from '../images/za4.jpg'
import za5 from '../images/za5.jpg'
import za6 from '../images/za6.avif'
import za7 from '../images/za7.avif'
import za8 from '../images/za8.jpg'
import t1 from '../images/t1.gif'
import t2 from '../images/t2.avif'
import t3 from '../images/t3.avif'
import t4 from '../images/t4.avif'
import t5 from '../images/t5.avif'
import t6 from '../images/t6.avif'
import t7 from '../images/t7.avif'
import ha1 from '../images/ha1.avif'
import ha2 from '../images/ha2.avif'
import ha3 from '../images/ha3.avif'
import ha4 from '../images/ha4.avif'
import ha5 from '../images/ha5.avif'
import ha6 from '../images/ha6.avif'
import ha7 from '../images/ha7.avif'
import ss1 from '../images/ss1.avif'
import ads1 from '../images/ads1.avif'
import ads2 from '../images/ads2.avif'
import ads3 from '../images/ads3.avif'
import ads4 from '../images/ads4.avif'
import ads5 from '../images/ads5.avif'
import ads6 from '../images/ads6.avif'
import ads7 from '../images/ads7.avif'
import ads8 from '../images/ads8.avif'
import ads9 from '../images/ads9.avif'
import ads10 from '../images/ads10.avif'
import ads11 from '../images/ads11.avif'
import ads12 from '../images/ads12.avif'
import ads13 from '../images/ads13.avif'
import ads14 from '../images/ads14.avif'
import ads15 from '../images/ads15.avif'
import ads16 from '../images/ads16.avif'
import ads17 from '../images/ads17.avif'
import ads18 from '../images/ads18.avif'
import ads19 from '../images/ads19.avif'
import ads20 from '../images/ads20.avif'
import ads21 from '../images/ads21.avif'
import ads22 from '../images/ads22.avif'
import end1 from '../images/end1.avif'
import end2 from '../images/end2.avif'
import app_store from '../images/app_store.svg'









const Content = () => {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const settings = {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.75,
        slidesToScroll: 1.75,

    };

    const settings1 = {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2,

    };

    const settings2 = {
        dots: false,
        infinite: true,
        onhover: true,
        speed: 2000, // Interval in milliseconds
        autoplay: true,
        autoplaySpeed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(intervalId);
                    // Timer has reached zero, you can perform any action here
                    return;
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);


        return () => clearInterval(intervalId);
    }, [minutes, seconds]);

    return (


        <div className='content'>

            <div className='headline'>

                <div className='high'>
                    <NavLink to="/products">
                        <img src={img1} alt="img" /> </NavLink>
                </div>

                <div className='high'>
                    <NavLink to="/products">
                        <img src={img2} alt="img" /> </NavLink>
                </div>

                <div className='high'>
                    <NavLink to="/products">
                        <img src={img3} alt="img" /> </NavLink>
                </div>

                <div className='high'>
                    <NavLink to="/products">
                        <img src={img4} alt="img" /> </NavLink>
                </div>

                <div className='high'>
                    <NavLink to="/products">
                        <img src={img5} alt="img" />
                    </NavLink>
                </div>

            </div>

            <div className='banner-details'>
                <NavLink to="/products">
                    <img src={marquee} alt="offer" />
                </NavLink>
            </div>

            <div>
                <Slider {...settings2} >

                    <div className="carousel-item active" >
                        <NavLink to="/products">
                            <img src={c1_1} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c1_2} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <NavLink to="/products">
                            <img src={c1_3} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c1_4} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c1_5} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c1_6} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c1_7} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>

                </Slider>

            </div>

            <div className='cashabck_offer'>

                <Slider {...settings2} >

                    <div className="carousel-item active" >

                        <img src={cashbank} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item" >

                        <img src={cashbank1} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item" data-bs-interval="3000">

                        <img src={cashbank2} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item" >

                        <img src={cashbank3} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item" >

                        <img src={cashbank4} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item" >

                        <img src={cashbank5} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item" >

                        <img src={cashbank6} className="d-block w-100" alt="..." />

                    </div>

                </Slider>

            </div>

            <div className="offer">
                <NavLink to="/products">
                    <img src={offer1} alt="offer" />

                </NavLink>
                <NavLink to="/products">
                    <img src={offer2} alt="offer" />
                </NavLink>
            </div>

            <div id="timer">
                {minutes !== 0 && seconds !== 0 && (
                    <div className='timer-component-wrapper'>
                        <strong>
                            <span>Ends In</span>
                            <span className='timer-component'>{minutes < 10 ? '0' + minutes : minutes}</span>
                            <span>m</span>
                            <span className='timer-component'>{seconds < 10 ? '0' + seconds : seconds}</span>
                            <span>s</span>
                        </strong>
                    </div>
                )}

            </div>


            <div className='fashion'>
                <NavLink to="/products">
                    <img src={fashion1} alt="fashion" />

                </NavLink>
                <NavLink to="/products">

                    <img src={fashion2} alt="fashion" />
                </NavLink>
            </div>

            <div className='sponsers'>
                <img src={fashion3} alt="fashion" />
                <Slider {...settings2}>

                    <div className="carousel-item active" >
                        <NavLink to="/products">
                            <img src={c11} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c12} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c13} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c14} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c15} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c16} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={c17} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>


                </Slider>

                <div className='trust'>
                    <NavLink to="/products">
                        <img src={trust} alt="trust" />
                    </NavLink></div>

            </div>


            <div className='fashion_steals'>
                <img src={fashion_steals} alt="..." />
                <Slider {...settings2}>
                    <div className="carousel-item active" >
                        <NavLink to="/products">
                            <img src={f1} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={f2} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={f3} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={f4} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={f5} className="d-block w-100" alt="..." />
                        </NavLink>
                    </div>

                </Slider>
            </div>

            <div className='deals'>
                <NavLink to="/products">
                    <img src={delivery} alt="..." />  </NavLink>
                <NavLink to="/products">
                    <img src={discount} alt="..." />  </NavLink>
                <NavLink to="/products">
                    <img src={deals} alt="..." />  </NavLink>

                <Slider {...settings2}>
                    <div className="carousel-item active" >
                        <NavLink to="/products">
                            <img src={d1} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={d2} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={d3} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={d4} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">
                            <img src={d5} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                </Slider>
            </div>

            <div className='sponsors_deals'>
                <img src={meet_sponsors} alt="..." />
                <div className='sponsors_items'>

                    <div>  <NavLink to="/products"><img src={b1} alt="..." />  </NavLink></div>
                    <div>  <NavLink to="/products"><img src={b2} alt="..." />  </NavLink></div>
                    <div>  <NavLink to="/products"> <img src={b3} alt="..." />  </NavLink></div>

                </div>
                <div className='sponsors_items'>

                    <div> <NavLink to="/products"><img src={b4} alt="..." /></NavLink></div>
                    <div> <NavLink to="/products"><img src={b5} alt="..." /></NavLink></div>
                    <div> <NavLink to="/products"> <img src={b6} alt="..." /></NavLink></div>

                </div>
                <div className='sponsors_items'>

                    <div> <NavLink to="/products"><img src={b7} alt="..." />     </NavLink></div>
                    <div> <NavLink to="/products"><img src={b8} alt="..." />     </NavLink></div>
                    <div> <NavLink to="/products"> <img src={b9} alt="..." />     </NavLink></div>

                </div>

            </div>

            <div className='w_winners'>
                <img src={winners} alt="..." />
                <div className='b_items'>
                   
                        <div> <NavLink to="/products"><img src={k_k} alt="..." />  </NavLink></div>
                        <div> <NavLink to="/products"><img src={t_shirts} alt="..." />  </NavLink></div>
                        <div> <NavLink to="/products"> <img src={tops} alt="..." />  </NavLink></div>
                        <div> <NavLink to="/products"> <img src={shirts} alt="..." />  </NavLink></div>
                  
                </div>
                <div className='b_items'>
                   
                        <div> <NavLink to="/products"><img src={jeans} alt="..." /></NavLink></div>
                        <div> <NavLink to="/products"><img src={track} alt="..." /></NavLink></div>
                        <div> <NavLink to="/products"> <img src={trousers} alt="..."/></NavLink></div>
                        <div> <NavLink to="/products"> <img src={shorts} alt="..." /></NavLink></div>
                    
                </div>
                <div className='b_items'>
                   
                        <div> <NavLink to="/products"><img src={dress} alt="..." /></NavLink></div>
                        <div> <NavLink to="/products"><img src={flip} alt="..." /></NavLink></div>
                        <div> <NavLink to="/products"> <img src={sports} alt="..." /></NavLink></div>
                        <div> <NavLink to="/products"> <img src={formal} alt="..." /></NavLink></div>
                 
                </div>
            </div>

            <div className='exclusives'>
                <img src={exclusives} alt="..." />
                <Slider {...settings}>

                    <div> <NavLink to="/products"><img src={rose} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={netplay} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={teamspirit} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={gap} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={superdry} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={lee_cooper} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={steve_madden} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={azorte} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={perfomax} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={john_players} alt="..." />  </NavLink></div>

                </Slider>
                <NavLink to="/products">
                    <img src={explore_more} alt="..." />
                </NavLink>
            </div>

            <div className='star'>

                <img src={star} alt="..." />
                <Slider  {...settings}>

                    <div><img src={r1} alt="..." /></div>
                    <div><img src={r2} alt="..." /></div>
                    <div><img src={r3} alt="..." /></div>
                    <div><img src={r4} alt="..." /></div>
                    <div><img src={r5} alt="..." /></div>
                    <div><img src={r6} alt="..." /></div>
                    <div><img src={r7} alt="..." /></div>
                    <div><img src={r8} alt="..." /></div>
                    <div><img src={r9} alt="..." /></div>

                </Slider>
                <img src={daily} alt="..." />
                <Slider  {...settings}>
                    <div> <NavLink to="/products"><img src={s1} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={s2} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={s3} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={s4} alt="..." />  </NavLink></div>
                    <div> <NavLink to="/products"><img src={s5} alt="..." />  </NavLink></div>


                </Slider>
            </div>

            <div className='star'>
                <img src={last_call} alt="..." />

                <Slider {...settings2}>
                    <div className="carousel-item active" >
                        <NavLink to="/products"> <img src={mens_w} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">  <img src={women_w} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"> <img src={women_e} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">  <img src={tranding_e} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">  <img src={kidsware} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">  <img src={a_m} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"> <img src={h_d} className="d-block w-100" alt="..." /> </NavLink>
                    </div>
                </Slider>

            </div>

            <div className='hot_deals'>
                <img src={hot_deals} alt="..." />
                <div className='b_items'>
                    <div> <NavLink to="/products"> <img src={bedsheets} alt="..." /> </NavLink></div>
                    <div> <NavLink to="/products"> <img src={beauty} alt="..." /> </NavLink></div>
                    <div> <NavLink to="/products">  <img src={handbags} alt="..." /> </NavLink></div>
                    <div> <NavLink to="/products">  <img src={watches} alt="..." /> </NavLink></div>
                </div>
                <div className='b_items'>
                    <div><NavLink to="/products"> <img src={v_w} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={caps} alt="..." /></NavLink></div>
                    <div><NavLink to="/products">  <img src={innerwear} alt="..." /></NavLink></div>
                    <div><NavLink to="/products">  <img src={fashion_je} alt="..." /></NavLink></div>
                </div>

            </div>

            <div className='ss_24'>
                <img src={ss_24} alt="..." />

                <Slider {...settings}>
                    <div><NavLink to="/products"><img src={mind_20_1} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={mind_20_2} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={upto_30_1} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={upto_30_2} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={upto_30_3} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={explore_all} alt="..." /></NavLink></div>
                </Slider>
            </div>
            <div className='hot_deals1'>
                <img src={scoring} alt="..." />
                <NavLink to="/products"> <img src={crocs} alt="..." /></NavLink>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={jack_jones} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={rebook} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={ax} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={superdry1} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={gap1} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={uspolo1} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={gas} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={thebear} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={snitch} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={brocks} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={fashor} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={kotty} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={blues} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={clarks} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={steve} alt="..." /></NavLink></div>
                </div>

            </div>

            <div className='hot_deals1'>
                <img src={c18} alt="..." />
                <Slider {...settings}>
                    <div><NavLink to="/products"><img src={c19} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={c20} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={c21} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={c22} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={c23} alt="..." /></NavLink></div>
                </Slider>
                <img src={v1} alt="..." />
                <Slider {...settings}>
                    <div><NavLink to="/products"><img src={v2} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={v3} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={v4} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={v5} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={v6} alt="..." /></NavLink></div>
                </Slider>
                <img src={k1} alt="..." />
                <Slider {...settings}>
                    <div><NavLink to="/products"><img src={k2} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={k3} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={k4} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={k5} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={k6} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={k7} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={k8} alt="..." /></NavLink></div>
                </Slider>
                <img src={h1} alt="..." />
                <Slider {...settings}>
                    <div><NavLink to="/products"><img src={h2} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={h3} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={h4} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={h5} alt="..." /></NavLink></div>

                </Slider>
                <img src={z1} alt="..." />
                <Slider {...settings}>
                    <div><NavLink to="/products"><img src={z2} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z3} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z4} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z5} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z6} alt="..." /></NavLink></div>

                </Slider>

                <Slider  {...settings2}>
                    <div className="carousel-item active" >
                        <NavLink to="/products">  <img src={z7} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">  <img src={z8} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"> <img src={z9} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"> <img src={z10} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products">  <img src={z11} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"><img src={z12} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"> <img src={z13} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                        <NavLink to="/products"> <img src={z14} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                </Slider>
                <div className='beautyall'>
                    <img src={z15} alt="..." />
                    <Slider {...settings1}>
                        <div><NavLink to="/products"><img src={z16} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={z17} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={z18} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={z19} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={z20} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={z21} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={z22} alt="..." /></NavLink></div>
                    </Slider>
                </div>
                <img src={z23} alt="..." />
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={z24} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z25} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={z26} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={z27} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z28} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={z29} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={z30} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z31} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={z32} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={z33} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z34} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={z35} alt="..." /></NavLink></div>
                </div>
                <div className='sponsors_items'>
                    <div><NavLink to="/products"><img src={z36} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"><img src={z37} alt="..." /></NavLink></div>
                    <div><NavLink to="/products"> <img src={z38} alt="..." /></NavLink></div>
                </div>
                <img src={z39} alt="..." />
                <Slider {...settings2}>
                    <div className="carousel-item active" >
                    <NavLink to="/products"><img src={z40} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                    <NavLink to="/products"> <img src={z41} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                    <NavLink to="/products"> <img src={z42} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                    <div className="carousel-item" >
                    <NavLink to="/products"> <img src={z43} className="d-block w-100" alt="..." /></NavLink>
                    </div>
                </Slider>
                <div className='gift'>
                    <img src={gift} alt="..." />
                    <img src={w1} alt="..." />
                    <Slider {...settings1}>
                        <div><NavLink to="/products"> <img src={w2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w7} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w8} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"> <img src={w9} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={e1} alt="..." />
                    <Slider {...settings1}>
                        <div><NavLink to="/products"><img src={e2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e7} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e8} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e9} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={e10} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={fa1} alt="..." />
                    <Slider {...settings1}>
                        <div><NavLink to="/products"><img src={fa2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={fa3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={fa4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={fa5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={fa6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={fa7} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={fa8} alt="..." /></NavLink></div>

                    </Slider>
                    <img src={ba1} alt="..." />
                    <Slider {...settings}>
                        <div><NavLink to="/products"><img src={ba2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ba3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ba4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ba5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ba6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ba8} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ba9} alt="..." /></NavLink></div>

                    </Slider>
                    <img src={ka1} alt="..." />
                    <Slider {...settings1}>
                        <div><NavLink to="/products"><img src={ka5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ka6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ka2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ka3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ka4} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={l1} alt="..." />
                    <Slider {...settings}>
                        <div><NavLink to="/products"><img src={l2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l7} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l8} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l9} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l10} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={l11} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={sa1} alt="..." />
                    <Slider {...settings}>
                        <div><NavLink to="/products"><img src={sa2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={sa3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={sa4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={sa5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={sa6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={sa7} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={sa8} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={za1} alt="..." />
                    <Slider {...settings}>
                        <div><NavLink to="/products"><img src={za3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={za2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={za4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={za5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={za6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={za7} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={za8} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={t1} alt="..." />
                    <Slider {...settings}>
                        <div><NavLink to="/products"><img src={t2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={t3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={t4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={t5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={t6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={t7} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={ha1} alt="..." />
                    <Slider {...settings1}>
                        <div><NavLink to="/products"><img src={ha2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ha3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ha4} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ha5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ha6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ha7} alt="..." /></NavLink></div>
                    </Slider>
                    <img src={ss1} alt="..." />
                    <img src={ads1} alt="..." />
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads2} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads3} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads4} alt="..." /></NavLink></div>
                    </div>
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads5} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads6} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads7} alt="..." /></NavLink></div>
                    </div>
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads8} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads9} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads10} alt="..." /></NavLink></div>
                    </div>
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads11} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads12} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads13} alt="..." /></NavLink></div>
                    </div>
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads14} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads15} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads16} alt="..." /></NavLink></div>
                    </div>
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads17} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads18} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads19} alt="..." /></NavLink></div>
                    </div>
                    <div className='sponsors_items'>
                        <div><NavLink to="/products"><img src={ads20} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads21} alt="..." /></NavLink></div>
                        <div><NavLink to="/products"><img src={ads22} alt="..." /></NavLink></div>
                    </div>
                    <img src={end1} alt="..." />
                    <img src={end2} alt="..." />
                </div>
                <div className='apps'>
                    <p>Experience the AJIO mobile app</p>
                    <div> <img src={app_store} alt="..." /></div>
                </div>
                <div className='service'>
                    <strong>Assured Quality | 100% Handpicked | Easy Exchange</strong>
                    <div className='s1'>
                        <div className='about'>
                            About Ajio
                        </div>
                        <div className='more'>
                            +more
                        </div>

                    </div>
                </div>

            </div >
        </div>

    )
}

export default Content;

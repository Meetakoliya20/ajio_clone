import React from 'react'
import { useEffect, useState } from 'react';
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











const Content = () => {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const settings = {
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1.5,

    };

    const settings1 = {
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2,

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
                    <img src={img1} alt="img" />
                </div>

                <div className='high'>
                    <img src={img2} alt="img" />
                </div>

                <div className='high'>
                    <img src={img3} alt="img" />
                </div>

                <div className='high'>
                    <img src={img4} alt="img" />
                </div>

                <div className='high'>
                    <img src={img5} alt="img" />

                </div>

            </div>

            <div className='banner-details'>
                <img src={marquee} alt="offer" />
            </div>

            <div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={c1_1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c1_2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c1_3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c1_4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c1_5} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c1_6} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c1_7} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4"></button>
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="5"></button>
                        <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="6"></button>
                    </div>
                </div>
            </div>

            <div className='cashabck_offer'>
                <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={cashbank} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={cashbank1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={cashbank2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={cashbank3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={cashbank4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={cashbank5} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={cashbank6} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="4"></button>
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="5"></button>
                        <button data-bs-target="#carouselExampleAutoplaying2" data-bs-slide-to="6"></button>
                    </div>
                </div>
            </div>

            <div className="offer">
                <img src={offer1} alt="offer" />
                <img src={offer2} alt="offer" />

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
                <img src={fashion1} alt="fashion" />
                <img src={fashion2} alt="fashion" />

            </div>

            <div className='sponsers'>
                <img src={fashion3} alt="fashion" />
                <div id="carouselExampleAutoplaying3" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={c11} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c12} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c13} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c14} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c15} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c16} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={c17} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="4"></button>
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="5"></button>
                        <button data-bs-target="#carouselExampleAutoplaying3" data-bs-slide-to="6"></button>
                    </div>
                </div>
                <div className='trust'>
                    <img src={trust} alt="trust" /></div>
            </div>


            <div className='fashion_steals'>
                <img src={fashion_steals} alt="..." />
                <div id="carouselExampleAutoplaying4" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={f1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={f2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={f3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={f4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={f5} className="d-block w-100" alt="..." />
                        </div>

                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying4" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying4" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying4" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying4" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying4" data-bs-slide-to="4"></button>

                    </div>
                </div>
            </div>

            <div className='deals'>
                <img src={delivery} alt="..." />
                <img src={discount} alt="..." />
                <img src={deals} alt="..." />

                <div id="carouselExampleAutoplaying5" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={d1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={d2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={d3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={d4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={d5} className="d-block w-100" alt="..." />
                        </div>


                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying5" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying5" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying5" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying5" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying5" data-bs-slide-to="4"></button>
                    </div>
                </div>
            </div>

            <div className='sponsors_deals'>
                <img src={meet_sponsors} alt="..." />
                <div className='sponsors_items'>
                    <div><img src={b1} alt="..." /></div>
                    <div><img src={b2} alt="..." /></div>
                    <div> <img src={b3} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={b4} alt="..." /></div>
                    <div><img src={b5} alt="..." /></div>
                    <div> <img src={b6} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={b7} alt="..." /></div>
                    <div><img src={b8} alt="..." /></div>
                    <div> <img src={b9} alt="..." /></div>
                </div>

            </div>

            <div className='w_winners'>
                <img src={winners} alt="..." />
                <div className='b_items'>
                    <div><img src={k_k} alt="..." /></div>
                    <div><img src={t_shirts} alt="..." /></div>
                    <div> <img src={tops} alt="..." /></div>
                    <div> <img src={shirts} alt="..." /></div>
                </div>
                <div className='b_items'>
                    <div><img src={jeans} alt="..." /></div>
                    <div><img src={track} alt="..." /></div>
                    <div> <img src={trousers} alt="..." /></div>
                    <div> <img src={shorts} alt="..." /></div>
                </div>
                <div className='b_items'>
                    <div><img src={dress} alt="..." /></div>
                    <div><img src={flip} alt="..." /></div>
                    <div> <img src={sports} alt="..." /></div>
                    <div> <img src={formal} alt="..." /></div>
                </div>
            </div>

            <div className='exclusives'>
                <img src={exclusives} alt="..." />
                <Slider {...settings}>
                    <div><img src={rose} alt="..." /></div>
                    <div><img src={netplay} alt="..." /></div>
                    <div><img src={teamspirit} alt="..." /></div>
                    <div><img src={gap} alt="..." /></div>
                    <div><img src={superdry} alt="..." /></div>
                    <div><img src={lee_cooper} alt="..." /></div>
                    <div><img src={steve_madden} alt="..." /></div>
                    <div><img src={azorte} alt="..." /></div>
                    <div><img src={perfomax} alt="..." /></div>
                    <div><img src={john_players} alt="..." /></div>
                </Slider>
                <img src={explore_more} alt="..." />
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
                    <div><img src={s1} alt="..." /></div>
                    <div><img src={s2} alt="..." /></div>
                    <div><img src={s3} alt="..." /></div>
                    <div><img src={s4} alt="..." /></div>
                    <div><img src={s5} alt="..." /></div>


                </Slider>
            </div>

            <div className='star'>
                <img src={last_call} alt="..." />

                <div id="carouselExampleAutoplaying8" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={mens_w} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={women_w} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={women_e} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={tranding_e} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={kidsware} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={a_m} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={h_d} className="d-block w-100" alt="..." />
                        </div>


                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="4"></button>
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="5"></button>
                        <button data-bs-target="#carouselExampleAutoplaying8" data-bs-slide-to="6"></button>
                    </div>
                </div>

            </div>

            <div className='hot_deals'>
                <img src={hot_deals} alt="..." />
                <div className='b_items'>
                    <div><img src={bedsheets} alt="..." /></div>
                    <div><img src={beauty} alt="..." /></div>
                    <div> <img src={handbags} alt="..." /></div>
                    <div> <img src={watches} alt="..." /></div>
                </div>
                <div className='b_items'>
                    <div><img src={v_w} alt="..." /></div>
                    <div><img src={caps} alt="..." /></div>
                    <div> <img src={innerwear} alt="..." /></div>
                    <div> <img src={fashion_je} alt="..." /></div>
                </div>

            </div>

            <div className='ss_24'>
                <img src={ss_24} alt="..." />

                <Slider {...settings}>
                    <div><img src={mind_20_1} alt="..." /></div>
                    <div><img src={mind_20_2} alt="..." /></div>
                    <div><img src={upto_30_1} alt="..." /></div>
                    <div><img src={upto_30_2} alt="..." /></div>
                    <div><img src={upto_30_3} alt="..." /></div>
                    <div><img src={explore_all} alt="..." /></div>
                </Slider>
            </div>
            <div className='hot_deals1'>
                <img src={scoring} alt="..." />
                <img src={crocs} alt="..." />
                <div className='sponsors_items'>
                    <div><img src={jack_jones} alt="..." /></div>
                    <div><img src={rebook} alt="..." /></div>
                    <div> <img src={ax} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={superdry1} alt="..." /></div>
                    <div><img src={gap1} alt="..." /></div>
                    <div> <img src={uspolo1} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={gas} alt="..." /></div>
                    <div><img src={thebear} alt="..." /></div>
                    <div> <img src={snitch} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={brocks} alt="..." /></div>
                    <div><img src={fashor} alt="..." /></div>
                    <div> <img src={kotty} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={blues} alt="..." /></div>
                    <div><img src={clarks} alt="..." /></div>
                    <div> <img src={steve} alt="..." /></div>
                </div>

            </div>

            <div className='hot_deals1'>
                <img src={c18} alt="..." />
                <Slider {...settings}>
                    <div><img src={c19} alt="..." /></div>
                    <div><img src={c20} alt="..." /></div>
                    <div><img src={c21} alt="..." /></div>
                    <div><img src={c22} alt="..." /></div>
                    <div><img src={c23} alt="..." /></div>
                </Slider>
                <img src={v1} alt="..." />
                <Slider {...settings}>
                    <div><img src={v2} alt="..." /></div>
                    <div><img src={v3} alt="..." /></div>
                    <div><img src={v4} alt="..." /></div>
                    <div><img src={v5} alt="..." /></div>
                    <div><img src={v6} alt="..." /></div>
                </Slider>
                <img src={k1} alt="..." />
                <Slider {...settings}>
                    <div><img src={k2} alt="..." /></div>
                    <div><img src={k3} alt="..." /></div>
                    <div><img src={k4} alt="..." /></div>
                    <div><img src={k5} alt="..." /></div>
                    <div><img src={k6} alt="..." /></div>
                    <div><img src={k7} alt="..." /></div>
                    <div><img src={k8} alt="..." /></div>
                </Slider>
                <img src={h1} alt="..." />
                <Slider {...settings}>
                    <div><img src={h2} alt="..." /></div>
                    <div><img src={h3} alt="..." /></div>
                    <div><img src={h4} alt="..." /></div>
                    <div><img src={h5} alt="..." /></div>

                </Slider>
                <img src={z1} alt="..." />
                <Slider {...settings}>
                    <div><img src={z2} alt="..." /></div>
                    <div><img src={z3} alt="..." /></div>
                    <div><img src={z4} alt="..." /></div>
                    <div><img src={z5} alt="..." /></div>
                    <div><img src={z6} alt="..." /></div>

                </Slider>

                <div id="carouselExampleAutoplaying9" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={z7} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z8} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z9} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z10} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z11} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z12} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z13} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z14} className="d-block w-100" alt="..." />
                        </div>


                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="3"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="4"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="5"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="6"></button>
                        <button data-bs-target="#carouselExampleAutoplaying9" data-bs-slide-to="7"></button>
                    </div>
                </div>
                <div className='beautyall'>
                    <img src={z15} alt="..." />
                    <Slider {...settings1}>
                        <div><img src={z16} alt="..." /></div>
                        <div><img src={z17} alt="..." /></div>
                        <div><img src={z18} alt="..." /></div>
                        <div><img src={z19} alt="..." /></div>
                        <div><img src={z20} alt="..." /></div>
                        <div><img src={z21} alt="..." /></div>
                        <div><img src={z22} alt="..." /></div>
                    </Slider>
                </div>
                <img src={z23} alt="..." />
                <div className='sponsors_items'>
                    <div><img src={z24} alt="..." /></div>
                    <div><img src={z25} alt="..." /></div>
                    <div> <img src={z26} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={z27} alt="..." /></div>
                    <div><img src={z28} alt="..." /></div>
                    <div> <img src={z29} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={z30} alt="..." /></div>
                    <div><img src={z31} alt="..." /></div>
                    <div> <img src={z32} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={z33} alt="..." /></div>
                    <div><img src={z34} alt="..." /></div>
                    <div> <img src={z35} alt="..." /></div>
                </div>
                <div className='sponsors_items'>
                    <div><img src={z36} alt="..." /></div>
                    <div><img src={z37} alt="..." /></div>
                    <div> <img src={z38} alt="..." /></div>
                </div>
                <img src={z39} alt="..." />
                <div id="carouselExampleAutoplaying0" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={z40} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z41} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z42} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={z43} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleAutoplaying0" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleAutoplaying0" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleAutoplaying0" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselExampleAutoplaying0" data-bs-slide-to="3"></button>

                    </div>
                </div>

            </div>
            <div className='gift'>
                <img src={gift} alt="..." />
                <img src={w1} alt="..." />
                <Slider {...settings1}>
                    <div><img src={w2} alt="..." /></div>
                    <div><img src={w3} alt="..." /></div>
                    <div><img src={w4} alt="..." /></div>
                    <div><img src={w5} alt="..." /></div>
                    <div><img src={w6} alt="..." /></div>
                    <div><img src={w7} alt="..." /></div>
                    <div><img src={w8} alt="..." /></div>
                    <div><img src={w9} alt="..." /></div>
                </Slider>
                <img src={e1} alt="..." />
                <Slider {...settings1}>
                    <div><img src={e2} alt="..." /></div>
                    <div><img src={e3} alt="..." /></div>
                    <div><img src={e4} alt="..." /></div>
                    <div><img src={e5} alt="..." /></div>
                    <div><img src={e6} alt="..." /></div>
                    <div><img src={e7} alt="..." /></div>
                    <div><img src={e8} alt="..." /></div>
                    <div><img src={e9} alt="..." /></div>
                    <div><img src={e10} alt="..." /></div>
                </Slider>
                <img src={fa1} alt="..." />
                <Slider {...settings1}>
                    <div><img src={fa2} alt="..." /></div>
                    <div><img src={fa3} alt="..." /></div>
                    <div><img src={fa4} alt="..." /></div>
                    <div><img src={fa5} alt="..." /></div>
                    <div><img src={fa6} alt="..." /></div>
                    <div><img src={fa7} alt="..." /></div>
                    <div><img src={fa8} alt="..." /></div>

                </Slider>
                <img src={ba1} alt="..." />
                <Slider {...settings}>
                    <div><img src={ba2} alt="..." /></div>
                    <div><img src={ba3} alt="..." /></div>
                    <div><img src={ba4} alt="..." /></div>
                    <div><img src={ba5} alt="..." /></div>
                    <div><img src={ba6} alt="..." /></div>
                    <div><img src={ba8} alt="..." /></div>
                    <div><img src={ba9} alt="..." /></div>

                </Slider>
                <img src={ka1} alt="..." />
                <Slider {...settings1}>
                     <div><img src={ka5} alt="..." /></div>
                    <div><img src={ka6} alt="..." /></div>
                    <div><img src={ka2} alt="..." /></div>
                    <div><img src={ka3} alt="..." /></div>
                    <div><img src={ka4} alt="..." /></div>
             </Slider>
             <img src={l1} alt="..." />
                <Slider {...settings1}>
                     <div><img src={l2} alt="..." /></div>
                    <div><img src={l3} alt="..." /></div>
                    <div><img src={l4} alt="..." /></div>
                    <div><img src={l5} alt="..." /></div>
                    <div><img src={l6} alt="..." /></div>
                    <div><img src={l7} alt="..." /></div>
                    <div><img src={l8} alt="..." /></div>
                    <div><img src={l9} alt="..." /></div>
                    <div><img src={l10} alt="..." /></div>
                    <div><img src={l11} alt="..." /></div>
             </Slider>
             <img src={sa1} alt="..." />
            </div>

        </div>
    )
}

export default Content;

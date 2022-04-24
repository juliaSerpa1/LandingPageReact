import React from 'react';
import './style.css'

const Home = () =>{
    return(
        <>
            <section className='home'>
                <div className='home-card container'>
                    <div className='cardPromo'>
                        <h1>Have the newest 5g technology</h1>
                        <small>Have Waze, call and Whatsapp at ease, enjoy, change, win</small>
                        <button type="button" class="btn btn-outline-info col-6">Confira nossas ofertas!</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
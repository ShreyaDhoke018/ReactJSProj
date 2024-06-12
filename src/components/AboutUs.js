import React from 'react';
import '../css/style.css';
import sofa from '../images/sofa.jpg';

export default function AboutUs() {
    return (
        <>
            <div className='left-abt' >
                <img src={sofa} className="rounded mx-auto d-block abt-img" alt="sofa" />
            </div>
            <div className='right-abt'>
                <div className='abt-title'>
                    <p class="h1"><strong>We Create Your Home </strong></p>
                    <p class="h1"><strong> More Asthetic</strong></p>
                </div>

            </div>
        </>
    )
}
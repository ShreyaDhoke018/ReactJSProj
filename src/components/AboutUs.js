import React from 'react';
import '../css/style.css';
import sofa from '../images/sofa.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
    return (
        <>
            <div className='left-abt' >
                <img src={sofa} className="rounded mx-auto d-block abt-img" alt="sofa" />
            </div>
            <div className='right-abt'>
                <div className='abt-title'>
                    <p className="h1"><strong>We Create Your Home </strong></p>
                    <p className="h1"><strong> More Asthetic</strong></p>
                    Furniture power is a software as service for multipurpose <br></br> business management system,
                </div>
                <div className='abt-info'>
                    <h5>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '15px' }} /><strong>Valuation Services</strong><br />
                    </h5>
                    Sometimes features require a short description. This can be detailed description<br />
                    <h5>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '15px' }} /> <strong>Development of Furniture Models</strong><br />
                    </h5>
                    Sometimes features require a short description. This can be detailed description
                </div>
            </div>
        </>
    )
}
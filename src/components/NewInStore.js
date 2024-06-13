import React from 'react'
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import chair from '../images/chair.jpg';
import bed from '../images/bed.jpg';
import cupboard from '../images/cupboard.jpeg';
import lights from '../images/lights.jpg';

export default function NewInStore() {
    return (
        <>
            <div className='left-new'>
                <p className="h1"><strong>New In <br></br> Store Now</strong></p>
                <div className='new-info'>
                    Get the latest items immediately <br></br>with promo prices
                </div>
                <div className='new-checknow'>
                    <a href=''>Check All <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
            </div>
            <div className='right-new'>
                <img src={chair} className="rounded mx-auto d-block new-img" alt="chair" />
                <img src={bed} className="rounded mx-auto d-block new-img" alt="bed" />
                <img src={cupboard} className="rounded mx-auto d-block new-img" alt="cupboard" />
                <img src={lights} className="rounded mx-auto d-block new-img" alt="lights" />
            </div>
        </>
    )
}
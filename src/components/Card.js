import React from 'react'
import '../css/style.css';

export default function Card() {
    return (
        <div className="card text-bg-success mt-5 ms-5 me-5 card-bottom e-card-horizontal">
            <div className="card-body" >
                <div className='card-content'>
                    <div className='card-info'>
                        <h1 className="card-title">7</h1>
                        <p className="card-text">Year<br></br>Experience</p>
                    </div>
                    <div className="vr"></div>
                    <div className='card-info'>
                        <h1 className="card-title">2</h1>
                        <p className="card-text">Opened in<br></br>
                            the country</p>
                    </div>
                    <div className="vr"></div>
                    <div className='card-info'>
                        <h1 className="card-title">10k+</h1>
                        <p className="card-text">Furniture<br></br>sold</p>
                    </div>
                    <div className="vr"></div>
                    <div className='card-info'>
                        <h1 className="card-title">260+</h1>
                        <p className="card-text">Variant<br></br>Furniture</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

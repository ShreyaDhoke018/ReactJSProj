import React from 'react'
import background from "../images/bg.jpg";

export default function Background() {
    return (
        <>
            <div div style={{ backgroundImage: `url(${background})` }}>
            </div>
        </>
    )
}
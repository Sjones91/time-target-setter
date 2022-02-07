import "../App.css";
import React, { useState } from 'react';

function Header() {
    return (
    <div>
        <div>
        <h1>DELIVERY TOOL</h1>
        <div className='underline'>
            <section class="underline-style">
                <div className='yellow'></div>
                <div className='orange'></div>
            </section>
            <section class="underline-style">
                <div className='orange'></div>
                <div className='yellow'></div>
            </section>
        </div>
        </div>
    </div>
    );
}

export default Header;

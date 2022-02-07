import "../App.css";
import React, { useState } from 'react';
import { FaCopyright } from 'react-icons/fa';

function Footer() {
    return (
    <div className="footer">
        <footer >
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
            <p>Sean Jones <FaCopyright/></p>
        </footer> 
    </div>
    );
}

export default Footer;
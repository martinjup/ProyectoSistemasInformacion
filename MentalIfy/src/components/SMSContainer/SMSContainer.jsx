import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SMSContainer.css'


export function SMSContainer(){
    return(
    <div className='SMSContainer'>
        <div className='SMSBBox'>
            <div className='SMSSBox'>
                <Link>Chatea con nuestros especialistas!</Link>
            </div>
        </div>
    </div>
    )
}
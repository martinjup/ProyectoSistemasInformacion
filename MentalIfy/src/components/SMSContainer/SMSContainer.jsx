import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SMSContainer.css';
import { CHAT_URL } from '../../constants/urls';



export function SMSContainer(){
    return(
    <div className='SMSContainer'>
        <div className='SMSBBox'>
            <div className='SMSSBox'>
                <Link to={CHAT_URL}>Chatea con nuestros especialistas!</Link>
            </div>
        </div>
    </div>  
    )
}
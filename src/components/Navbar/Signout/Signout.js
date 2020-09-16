import React from 'react'
import './Signout.css'

const Signout = (props) => {
    return (
        <div>
                <h3 className='signout' onClick={() => {props.setSessionToken(''); localStorage.clear()}}>Sign Out</h3>
        </div>
    )
}

export default Signout;

import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './landinggreet.css'

export default class LandingGreet extends React.Component {
    render() {
        return(
            <div className='LandingGreet, greetgroup'>
                    <div className='item'>
                        <h2>Meet EasyCal</h2>
                    </div>
                    
                    <div className='item'>
                        <h3>A scheduling solution for the modern office.</h3>
                    </div>
                    <div>
                        <button>Create an Account</button>
                    </div>
                    
            </div>
        )
        
    }
}
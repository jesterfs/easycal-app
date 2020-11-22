import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/signup'><button>Create an Account</button></Link>
                </div>  
            </div>
        )    
    }
}
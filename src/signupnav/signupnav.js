import React from 'react'
import { Link } from 'react-router-dom'
import './signupnav.css'

export default class SignUpNav extends React.Component {
    render() {
        return(
            <div className='SignUpNav, group'>
                <div className='item'>  
                </div>
                <div className='item'>
                    <h1>EasyCal</h1>
                </div>
                <div className='item navbtndiv'>
                    <Link to='/login'> <button className='navbtn'>Log In</button> </Link>
                </div>
            </div>
        )        
    }
}
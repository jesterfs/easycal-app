import React from 'react'
import { Link } from 'react-router-dom'
import './landingnav.css'

export default class LandingNav extends React.Component {
    render() {
        return(
            <div className='LandingNav, group'>
                <div className='item signupbtn navbtndiv'>
                <Link to='/signup'><button className='navbtn'>Sign Up</button></Link> 
                </div>
                <div className='item'>
                    <h1>EasyCal</h1>
                </div>
                <div className='item navbtndiv'>
                    <Link to='/login'><button className='navbtn'>Log In</button></Link>
                </div>
            </div>
        ) 
    }
}
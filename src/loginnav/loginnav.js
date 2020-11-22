import React from 'react'
import { Link } from 'react-router-dom'
import './loginnav.css'

export default class LoginNav extends React.Component {
    render() {
        return(
            <div className='LoginNav, group'>
                <div className='item'>
                </div>
                <div className='item'>
                    <h1>EasyCal</h1>
                </div>
                <div className='item navbtndiv'>
                    <Link to='/signup'> <button className='navbtn'>Sign Up</button> </Link>
                </div>
            </div>
        )
    }
}
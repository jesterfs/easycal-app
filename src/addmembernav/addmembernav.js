import React from 'react'
import { Link } from 'react-router-dom'
import './addmembernav.css'

export default class AddMemberNav extends React.Component {
    render() {
        return(
            <div className='AddMemberNav, group'>
                <div className='item navbtndiv'>
                    <Link to='/account'><button className='navbtn'>Account</button></Link>
                </div>
                
                <div className='item'>
                    <h1>EasyCal</h1>
                </div>
                <div className='item navbtndiv'>
                    <Link to='/dashboard'><button className='navbtn'>Dashboard</button></Link>
                </div>
            </div>
        )
        
    }
}
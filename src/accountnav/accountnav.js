import React from 'react'
import { Link } from 'react-router-dom'
import './accountnav.css'

export default class AccountNav extends React.Component {
    render() {
        return(
            <div className='AccountNav, group'>
                    <div className='item navbtndiv'>
                        <Link to='/addevent'><button className='navbtn'>Add an Event</button></Link>
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
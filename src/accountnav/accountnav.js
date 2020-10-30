import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './accountnav.css'

export default class AccountNav extends React.Component {
    render() {
        return(
            <div className='AccountNav, group'>
                    <div className='item'>
                        <Link to='/addevent'><button>Add an Event</button></Link>
                    </div>
                    
                    <div className='item'>
                        <h1>EasyCal</h1>
                    </div>
                    <div className='item'>
                        <Link to='/dashboard'><button>Dashboard</button></Link>
                        
                    </div>
            </div>
        )
        
    }
}
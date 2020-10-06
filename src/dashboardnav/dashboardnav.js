import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './dashboardnav.css'

export default class DashboardNav extends React.Component {
    render() {
        return(
            <div className='DashboardNav, group'>
                    <div className='item'>
                        <button>Account</button>
                    </div>
                    
                    <div className='item'>
                        <h1>EasyCal</h1>
                    </div>
                    <div className='item'>
                        <Link to='/addmember'><button>Add Team Member</button></Link>
                        
                    </div>
            </div>
        )
        
    }
}
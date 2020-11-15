import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './dashboardnav.css'

export default class DashboardNav extends React.Component {
    render() {
        return(
            <div className='DashboardNav, group'>
                    <div className='item addMemberBtn'>
                    <Link to='/addmember'><button>Add Team Member</button></Link>
                    </div>
                    
                    <div className='item'>
                        <h1>EasyCal</h1>
                    </div>
                    <div className='item'>
                        
                        <Link to='/account'><button>Account</button></Link>
                    </div>
            </div>
        )
        
    }
}
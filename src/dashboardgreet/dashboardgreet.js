import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './dashboardgreet.css'

export default class DashboardGreet extends React.Component {
    render() {
        return(
            <div className='DashboardGreet, greetgroup'>
                    <div className='item'>
                        <h2>Welcome, User!</h2>
                    </div>
                    
                    <div className='item'>
                        <h3>Calendar Name</h3>
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addevent'><button>Add An Event</button></Link>
                        
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addmember'><button>Add A Team Member</button></Link>
                        
                    </div>
                    
            </div>
        )
        
    }
}
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './addmembernav.css'

export default class AddMemberNav extends React.Component {
    render() {
        return(
            <div className='AddMemberNav, group'>
                    <div className='item'>
                        <Link to='/account'><button>Account</button></Link>
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
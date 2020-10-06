import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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
                    <div className='item'>
                        <button>Sign Up</button>
                        
                    </div>
            </div>
        )
        
    }
}
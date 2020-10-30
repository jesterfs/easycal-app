import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './landingnav.css'

export default class LandingNav extends React.Component {
    render() {
        return(
            <div className='LandingNav, group'>
                    <div className='item'>
                        <Link to='/login'><button>Log In</button></Link>
                        
                    </div>
                    
                    <div className='item'>
                        <h1>EasyCal</h1>
                    </div>
                    <div className='item'>
                        <Link to='/signup'><button>Sign Up</button></Link>
                        
                    </div>
            </div>
        )
        
    }
}
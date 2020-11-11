import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './accountgreet.css'
import ApiContext from '../ApiContext.js'
import cfg from '../config.js'
import TokenService from '../services/token-services'


export default class AccountGreet extends React.Component {


    static contextType = ApiContext;

    handleLogOut = e => {
        e.preventDefault()
        TokenService.clearAuthToken()
        this.props.history.push('/')

    }


    render() {
        
        return(
            <div className='AccountGreet, greetgroup'>
                    <div className='item'>
                        <h2>Hi {this.context.currentUser.name}!</h2>
                    </div>
                    
                    <div className='item'>
                        
                            <div className='accountLine'><h3>Full Name:</h3> {this.context.currentUser.name} </div>
                            <div className='accountLine'><h3>Email:</h3> {this.context.currentUser.email} </div>
                            <div className='accountLine'><h3>Calendars: </h3>
                                <ul>
                                {this.context.userCalendars.map(calendar =>
                                            <li className='accountLine' key={calendar.id} value={calendar.id}>{calendar.name}</li>
                                        )}
                                </ul>    
                            </div>
                            <div className='accountBtn'>
                                <Link to='/changepassword'><button>Change Your Password</button></Link>
                                
                            </div>
                            <div><button className='accountBtn' onClick={this.handleLogOut}>Log Out</button></div>
                        
                    </div>
                    
            </div>
        )
        
    }
}
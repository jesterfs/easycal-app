import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './accountgreet.css'
import ApiContext from '../ApiContext.js'
import cfg from '../config.js'


export default class AccountGreet extends React.Component {


    static contextType = ApiContext;


    render() {
        
        return(
            <div className='AccountGreet, greetgroup'>
                    <div className='item'>
                        <h2>Hi {this.context.currentUser.name}!</h2>
                    </div>
                    
                    <div className='item'>
                        
                            <div><h3>Full Name:</h3> {this.context.currentUser.name} </div>
                            <div><h3>Email:</h3> {this.context.currentUser.email} </div>
                            <div><h3>Calendars: </h3>
                                <ul>
                                {this.context.userCalendars.map(calendar =>
                                            <li key={calendar.id} value={calendar.id}>{calendar.name}</li>
                                        )}
                                </ul>    
                            </div>
                            <div><Link to='/changepassword'><button>Change Your Password</button></Link></div>
                        
                    </div>
                    
            </div>
        )
        
    }
}
import React from 'react'
import { Link } from 'react-router-dom'
import './accountgreet.css'
import ApiContext from '../ApiContext.js'
import TokenService from '../services/token-services'


export default class AccountGreet extends React.Component {


    static contextType = ApiContext;

    handleLogOut = e => {
        e.preventDefault()
        TokenService.clearAuthToken()
        this.context.clearUser()
        this.props.history.push('/')

    }





    render() {

        const user = this.context.currentUser;
        
        
        return(
            <div className='accountgreetgroup '>
                <div className='item'>
                    <h2>Hi {user && user.name}!</h2>
                </div>
                
                <div className='item'>
                    
                    <div className='accountLine'><h3>Full Name:</h3> {user && user.name} </div>
                    <div className='accountLine'><h3>Email:</h3> {user && user.email} </div>
                    <div className='accountLine'><h3>Calendars: </h3>
                        <ul>
                            {this.context.userCalendars.map(calendar =>
                                <li className='accountLine' key={calendar.id} value={calendar.id}>{calendar.name}</li>
                            )}
                        </ul>    
                    </div>
                    <div className='accountBtn'>
                        <Link to='/changepassword'><button className='addbtn'>Change Your Password</button></Link>
                        
                    </div>
                    <div><button className='accountBtn addbtn' onClick={this.handleLogOut}>Log Out</button></div>
                    
                </div>
                    
            </div>
        )
        
    }
}
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './signupgreet.css'

export default class SignUpGreet extends React.Component {
    render() {
        return(
            <div className='SignUpGreet, greetgroup'>
                    <div className='item'>
                        <h2>Create Your EasyCal Account</h2>
                    </div>
                    
                    <div className='item'>
                        <form class='signup-form'>
                
                            <div>
                                <label for="signup-name">Full Name</label>
                                <input type="text" name='signup-name' id='signup-name' placeholder='Full Name' />
                            </div>
                            <div>
                                <label for="signup-team-name">Team Name</label>
                                <input type="text" name='signup-team-name' id='signup-team-name' placeholder='Team Name' />
                            </div>
                            <div>
                                <label for="signup-email">Email</label>
                                <input type="text" name='signup-email' id='signup-email' />
                            </div>
                            <div>
                                <label for="signup-password">Password</label>
                                <input type="password" name='signup-password' id='signup-password' />
                            </div>

                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
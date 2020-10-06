import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './logingreet.css'

export default class LoginGreet extends React.Component {
    render() {
        return(
            <div className='LoginGreet, greetgroup'>
                    <div className='item'>
                        <h2>Welcome Back!</h2>
                    </div>
                    
                    <div className='item'>
                        <form class='login-form'>
                            
                            <div>
                                <label for="login-email">Email</label>
                                <input type="text" name='login-email' id='login-email' />
                            </div>
                            <div>
                                <label for="login-password">Password</label>
                                <input type="password" name='login-password' id='login-password' />
                            </div>

                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
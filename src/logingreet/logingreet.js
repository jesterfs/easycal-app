import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './logingreet.css'
import ApiContext from '../ApiContext'
import cfg from '../config.js'
import TokenServices from '../services/token-services'




export default class LoginGreet extends React.Component {
    
    login(email, password) {
    
        return fetch(cfg.API_ENDPOINT + 'members/login', {
            method: 'POST', 
            body: JSON.stringify({email, password}),
            headers: { 
                'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
                'Content-type': 'application/json' }
        })
        
        .then(r => r.json())
        
        
    }

    static contextType = ApiContext

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        
        const { email, password } = ev.target
        
        this.login(email.value, password.value)
        
        .then(r => {
            
            
            console.log(r)
            this.context.changeUser(r.member)
            this.context.fetchUserData(r.member.id)
            TokenServices.saveAuthToken(r.token)
            this.props.history.push('/dashboard')
            
            
        })
            
                
                
           
       

                
    }
    render() {
        return(
            <div className='LoginGreet, greetgroup'>
                    <div className='item'>
                        <h2>Welcome Back!</h2>
                    </div>
                    
                    <div className='item'>
                        <form className='login-form' onSubmit={this.handleSubmitBasicAuth}>
                            
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' />
                            </div>

                            <button type='submit'>Login</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
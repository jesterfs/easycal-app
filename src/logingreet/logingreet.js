import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './logingreet.css'
import ApiContext from '../ApiContext'
import cfg from '../config.js'
import TokenServices from '../services/token-services'




export default class LoginGreet extends React.Component {
    
    

    static contextType = ApiContext

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        
        const { email, password } = ev.target
        const theEmail = email.value

        
        
        const member = this.context.members.filter(member => member.email === theEmail)
        console.log(member[0])

        const currentMember = member[0]

        // this.login(email.value, password.value)
        
        
            
            
            
        this.context.changeUser(currentMember)
            
            // TokenServices.saveAuthToken(r.token)
        this.props.history.push('/dashboard')
            
            
       
            
                
                
           
       

                
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
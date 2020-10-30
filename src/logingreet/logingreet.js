import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './logingreet.css'
import ApiContext from '../ApiContext'

export default class LoginGreet extends React.Component {
    

    static contextType = ApiContext

    changeUser(user) {
        this.context.changeUser({...user})
        
        this.props.history.push(`/dashboard`)
    }


    formSubmitted = e => { 
        e.preventDefault()
    
        const user = {
          email:  e.currentTarget.loginEmail.value, 
          password: e.currentTarget.loginPassword.value
        }
        // console.log(member)
        this.changeUser(user)
      }
    
    render() {
        return(
            <div className='LoginGreet, greetgroup'>
                    <div className='item'>
                        <h2>Welcome Back!</h2>
                    </div>
                    
                    <div className='item'>
                        <form class='login-form' onSubmit={this.formSubmitted}>
                            
                            <div>
                                <label for="loginEmail">Email</label>
                                <input type="email" name='loginEmail' id='loginEmail' />
                            </div>
                            <div>
                                <label for="loginPassword">Password</label>
                                <input type="password" name='loginPassword' id='loginPassword' />
                            </div>

                            <button type='submit'>Login</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
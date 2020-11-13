import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './signupgreet.css'
import ApiContext from '../ApiContext.js'
import cfg from '../config.js'
import TokenServices from '../services/token-services'
var generator = require('generate-password');





export default class SignUpGreet extends React.Component {
    
    static contextType = ApiContext;

    addMember(member) {
        
            
            this.context.addMember(member)
            this.context.changeUser(member)
            this.props.history.push(`/dashboard`)
       
    }
    
    formSubmitted = e => { 
        e.preventDefault()
        

        


        


        const member = {
          name: e.currentTarget.signupName.value ,
          email: e.currentTarget.signupEmail.value,
        //   calendarIds,
          password: e.currentTarget.signupPassword.value
          
        }

        // const calendar = {
        //     owner: this.context.currentUser.id,
        //     name: `${this.currentUser.name}'s First Calendar`

        // }

        
        
        this.addMember(member)
      }
    
    render() {
        return(
            <div className='SignUpGreet, greetgroup'>
                    <div className='item'>
                        <h2>Create Your EasyCal Account</h2>
                    </div>
                    
                    <div className='item'>
                        <form class='signup-form' on onSubmit={this.formSubmitted}>
                
                            <div>
                                <label for="signupName">Full Name</label>
                                <input type="text" name='signupName' id='signupName' placeholder='Full Name' />
                            </div>

                            <div>
                                <label for="signupEmail">Email</label>
                                <input type="text" name='signupEmail' id='signupEmail' />
                            </div>
                            <div>
                                <label for="signupPassword">Password</label>
                                <input type="password" name='signupPassword' id='signupPassword' />
                            </div>

                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
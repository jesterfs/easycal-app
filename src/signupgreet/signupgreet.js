import React from 'react'
import './signupgreet.css'
import ApiContext from '../ApiContext.js'
import cfg from '../config.js'
import TokenServices from '../services/token-services'

export default class SignUpGreet extends React.Component {
    
    static contextType = ApiContext;

    addMemberToApi(member) {
        return fetch(cfg.API_ENDPOINT + 'members/signup', {
            method: 'POST', 
            body: JSON.stringify(member),
            headers: { 
                'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
                'Content-type': 'application/json' }
        })
    
            .then(r => r.json())
            .then(data => this.addMember(data.member, data.token))
            .catch((e) =>  {         
                alert(`Couldn't add member, sorry`)    
            }) 
    }

    addMember(member, token) {
        this.context.changeUser(member)
        this.context.fetchUserData(member.id)
        TokenServices.saveAuthToken(token)
        this.props.history.push(`/dashboard`)       
    }

    formSubmitted = e => { 
        e.preventDefault()
    
        const member = {
            name: e.currentTarget.signupName.value ,
            email: e.currentTarget.signupEmail.value,
            password: e.currentTarget.signupPassword.value
        }
        this.addMemberToApi(member)
    }
    
    render() {
        return(
            <div className='SignUpGreet, greetgroup'>
                <div className='item'>
                    <h2>Create Your EasyCal Account</h2>
                </div>
                
                <div className='item'>
                    <form className='signup-form' onSubmit={this.formSubmitted}>
                        <div>
                            <label htmlFor='signupName'>Full Name</label>
                            <input type='text' name='signupName' id='signupName' placeholder='Full Name' />
                        </div>

                        <div>
                            <label htmlFor='signupEmail'>Email</label>
                            <input type='text' name='signupEmail' id='signupEmail' />
                        </div>
                        <div>
                            <label htmlFor='signupPassword'>Password</label>
                            <input type='password' name='signupPassword' id='signupPassword' />
                        </div>
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>       
            </div>
        )        
    }
}
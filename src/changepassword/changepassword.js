import React from 'react'

import './changepassword.css'
import ApiContext from '../ApiContext'
import cfg from '../config.js'
import TokenServices from '../services/token-services';

function updatePassword(updatedFields, id) {
    
    return fetch(cfg.API_ENDPOINT + 'members/' + id , {
        method: 'PATCH', 
        body: JSON.stringify(updatedFields),
        headers: { 
            'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
            'Content-type': 'application/json' }
    })
    
    .then(r => r.json())
    
    
}

export default class ChangePassword extends React.Component {
    

    static contextType = ApiContext

    changeMember(updatedFields) {
        const id = this.context.currentUser.id
        updatePassword(updatedFields, id)
            .then(this.props.history.push(`/account`))
        .catch(() => alert("Couldn't add member, sorry"))      
    }


    formSubmitted = e => { 
        e.preventDefault()
    
        const password1 = e.currentTarget.newpassword.value
        const password2 = e.currentTarget.newpassword2.value

        const updatedFields = {
            password: password1
        }
        
        if(password1 !== password2) {
            return alert('Please make sure passwords match.')
        }
        
        this.changeMember(updatedFields)
      }
    
    render() {
        return(
            <div className='changepassword, greetgroup'>
                    <div className='item'>
                        <h2>Change Your Password</h2>
                    </div>
                    
                    <div className='item'>
                        <form className='change-password-form' onSubmit={this.formSubmitted}>
                            
                            <div>
                                <label htmlFor="newpassword">New Password</label>
                                <input type="password" name='newpassword' id='newpassword' />
                            </div>
                            <div>
                                <label htmlFor="newpasswordagain">Confirm Password</label>
                                <input type="password" name='newpassword2' id='newpassword2' />
                            </div>

                            <button type='submit'>Change Password</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './addmembergreet.css'
import ApiContext from '../ApiContext.js'

export default class AddMemberGreet extends React.Component {


    static contextType = ApiContext;

    addMember(member) {
        this.context.addMember({...member})
        
        this.props.history.push(`/dashboard`)
    }

    formSubmitted = e => { 
        e.preventDefault()
    
        const member = {
          id: this.context.members.length , 
          name: e.currentTarget.memberName.value ,
          email:  e.currentTarget.memberEmail.value, 
          password: null,
        }
        // console.log(member)
        this.addMember(member)
      }


    render() {
        return(
            <div className='AddMemberGreet, greetgroup'>
                    <div className='item'>
                        <h2>Add a Team Member</h2>
                        <p>The invitee will have to finish the sign-up process.</p>
                    </div>
                    
                    <div className='item'>
                        <form className='addMemberForm' onSubmit={this.formSubmitted}>
                
                            <div>
                                <label htmlFor="memberName">Full Name</label>
                                <input type="text" name='memberName' id='memberName' placeholder='Full Name' />
                            </div>
                            <div>
                                <label htmlFor="memberEmail">Team Name</label>
                                <input type="email" name='memberEmail' id='memberEmail' placeholder='Email' />
                            </div>

                            <button type='submit'>Send Invite</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
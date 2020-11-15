import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './addmembergreet.css'
import ApiContext from '../ApiContext.js'
import cfg from '../config.js'
import TokenServices from '../services/token-services';

function addMemberToApi(member) {
    console.log(member)
    return fetch(cfg.API_ENDPOINT + 'members', {
        method: 'POST', 
        body: JSON.stringify(member),
        headers: { 
            'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
            'Content-type': 'application/json' }
    })

    .then(r => r.json())
    .then(console.log('success!'))
    .then(() => console.log('success!'))

}


export default class AddMemberGreet extends React.Component {


    static contextType = ApiContext;

    addMember(member) {
        // this.context.addEvent({...event})
        addMemberToApi(member)
        .then(member => {
            console.log(member)
            this.context.addMember(member)
            this.props.history.push(`/dashboard`)
        })
        .catch((e) =>  {
            console.log(e)
            alert("Couldn't add member, sorry")

    })
    }


    formSubmitted = e => { 
        e.preventDefault()
        

        //this works for now but must change to reflect the user
        


        const calendarIds = Array.from(e.currentTarget.selectMemberCalendars.options)
        .filter(o => o.selected).map(o => Number(o.value))


        const member = {
          name: e.currentTarget.memberName.value ,
          email: e.currentTarget.memberEmail.value,
          calendarIds
        }

        // const updatedFields

        
        
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
                                <label htmlFor="memberEmail">Email</label>
                                <input type="email" name='memberEmail' id='memberEmail' placeholder='Email' />
                            </div>
                            <div>
                            <label htmlFor="selectMemberCalendars">Select Calendars:</label>
                                    <br></br>
                                    <select name="selectMemberCalendars" id="selectMemberCalendars"  multiple>
                                        
                                        {this.context.userCalendars.map(calendar =>
                                            <option key={calendar.id} value={calendar.id}>{calendar.name}</option>
                                        )}
                                    
                                    </select> 
                            </div>

                            <button type='submit'>Send Invite</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
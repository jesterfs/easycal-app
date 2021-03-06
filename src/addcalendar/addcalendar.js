import React from 'react'
import './addcalendar.css'
import ApiContext from '../ApiContext.js'
import cfg from '../config.js'
import TokenServices from '../services/token-services';


function addCalendarToApi(calendar) {
    
    return fetch(cfg.API_ENDPOINT + 'calendars', {
        method: 'POST', 
        body: JSON.stringify(calendar),
        headers: { 
            'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
            'Content-type': 'application/json' }
    })
    .then(r => r.json()) 
}


export default class AddEventGreet extends React.Component {

    static contextType = ApiContext;

    addCalendar(calendar) {

        addCalendarToApi(calendar)
            .then(calendar => {
            
                this.context.addCalendar(calendar)
                this.props.history.push(`/dashboard`)
            })
            .catch((e) =>  {
                
                alert(`Couldn't add event, sorry`)

            })
    }

    formSubmitted = e => { 
        e.preventDefault()
        const calendarLength = this.context.userCalendars.length
        const newId = calendarLength + 1

        const calendar = {
          id: newId,
          name: e.currentTarget.calendarName.value ,
          owner: this.context.currentUser.id,
          inviteIds: [this.context.currentUser.id]
        }
        this.addCalendar(calendar)
      }

    render() {
        return(
            <div className='AddCalendarGreet, greetgroup'>
                <div className='item'>
                    <h2>Add a Calendar</h2>
                </div>
                
                <div className='item'>
                    <form className='add-calendar-form' onSubmit={this.formSubmitted}>
                        <div>
                            <label htmlFor='calendarName'>Calendar Name</label>
                            <input type='text' name='calendarName' id='calendarName' placeholder='Calendar Name' />
                        </div>
                        <button type='submit' className='addbtn'>Create Calendar</button>
                    </form>
                </div>       
            </div>
        )   
    }
}
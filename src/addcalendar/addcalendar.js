import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './addcalendar.css'
import ApiContext from '../ApiContext.js'
import moment from 'moment'
import cfg from '../config.js'
import TokenServices from '../services/token-services';





export default class AddEventGreet extends React.Component {

    

    static contextType = ApiContext;

    // componentDidMount(){
    //     // this.setState({availableMembers: [this.context.members]})
    // }

    addCalendar(calendar) {

        
            this.context.addCalendar(calendar) 
            // 
            this.props.history.push(`/dashboard`)
        
        
    }

    

    // addCalendar(event) {
    //     // this.context.addEvent({...event})
    //     const ownerId = this.context.currentUser.id
    //     addCalendarToApi(calendar)
    //     .then(event => {
    //         this.context.addCalendar(event)
    //         this.props.history.push(`/dashboard`)
    //     })
    //     .catch(() => alert("Couldn't add calendar, sorry"))
    // }

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
                        <h2>Add an Event</h2>
                    </div>
                    
                    <div className='item'>
                        <form className='add-calendar-form' onSubmit={this.formSubmitted} 
                        
                        >
                
                            <div>
                                <label htmlFor="calendarName">Event Name</label>
                                <input type="text" name='calendarName' id='calendarName' placeholder='Calendar Name' />
                            </div>
                            

                            <button type='submit'>Create Calendar</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
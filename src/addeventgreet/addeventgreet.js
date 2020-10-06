import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './addeventgreet.css'
import ApiContext from '../ApiContext.js'

export default class AddEventGreet extends React.Component {

    state = {
        addedMembers:[]
    }

    static contextType = ApiContext;

    

    addEvent(event) {
        this.context.addEvent({...event})
        
        this.props.history.push(`/dashboard`)
    }

    formSubmitted = e => { 
        e.preventDefault()
    
        const event = {
          id: this.context.events.length , 
          name: e.currentTarget.eventName.value ,
          date:  e.currentTarget.eventDate.value, 
          startTime: e.currentTarget.eventStartTime.value, 
          endTime: e.currentTarget.eventEndTime.value, 
          participants: e.currentTarget.eventParticipants.value, 
        }
        // console.log(member)
        this.addEvent(event)
      }



    render() {

        const memberList = this.context.members;

        return(
            <div className='AddEventGreet, greetgroup'>
                    <div className='item'>
                        <h2>Add an Event</h2>
                    </div>
                    
                    <div className='item'>
                        <form className='add-event-form' onSubmit={this.formSubmitted}>
                
                            <div>
                                <label htmlFor="eventName">Event Name</label>
                                <input type="text" name='eventName' id='eventName' placeholder='Event Name' />
                            </div>
                            <div>
                                <label htmlFor="eventDate">Date</label>
                                <input type="date" name='eventDate' id='eventDate'  />
                            </div>
                            <div>
                                <label htmlFor="eventStartTime">Start Time</label>
                                <input type="time" name='eventStartTime' id='eventStartTime' />
                                <label htmlFor="eventEndTime">End Time</label>
                                <input type="time" name='eventEndTime' id='eventEndTime' />
                            </div>
                            <div>
                                <label htmlFor="eventParticipants">Event Participants:</label>
                                <br></br>
                                <select name="eventParticipants" id="eventParticipants" multiple>
                                    
                                    {memberList.map(member =>
                                        <option key={member.id} value={member.id}>{member.name}</option>
                                    )}
                                    
                                </select>    
                            </div>

                            <button type='submit'>Schedule Event</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
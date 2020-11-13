import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './addeventgreet.css'
import ApiContext from '../ApiContext.js'
import moment from 'moment'
import cfg from '../config.js'
import {fromApi} from '../diplomat.js'
import TokenServices from '../services/token-services';

function updateEventOnApi(event, eventId) {
    console.log(event)
    return fetch(cfg.API_ENDPOINT + 'events/' + eventId, {
        method: 'PATCH', 
        body: JSON.stringify(event),
        headers: { 
            'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
            'Content-type': 'application/json' }
    })

    .then(r => r.json())

}

export default class EditEventGreet extends React.Component {

    state = {
        availableMembers: [],
        addedMembers:[]
    }

    static contextType = ApiContext;

    // componentDidMount(){
    //     // this.setState({availableMembers: [this.context.members]})
    // }

    addMembers = e => {
        e.preventDefault()

        const inviteId = e.currentTarget.eventParticipants.value
        if(!this.state.addedMembers.includes(inviteId)) {
            this.setState({addedMembers:[...this.state.addedMembers, inviteId]})
        }

    }



    updateEvent(event) {
        const eventId = this.props.match.params.eventId
        updateEventOnApi(event, eventId)
        .then(updatedEvent => {
            console.log(updatedEvent, fromApi(updatedEvent))
            this.context.changeEvent(eventId)
            this.context.updateEvent(fromApi(updatedEvent))
            this.props.history.push(`/events/${eventId}`)
        })
        .catch((e) =>  {
            console.log(e)
            alert("Couldn't update event, sorry")

    })
    }

    formSubmitted = e => { 
        e.preventDefault()

        const dateStr = e.currentTarget.eventDate.value
        const startingtime = e.currentTarget.eventStartTime.value
        const endingtime = e.currentTarget.eventEndTime.value
        const start_time = moment(`${dateStr} ${startingtime}`, "YYYY-MM-DD HH:mm");
        const end_time = moment(`${dateStr} ${endingtime}`, "YYYY-MM-DD HH:mm");

        //this works for now but must change to reflect the user
        const owner_id = this.context.currentUser.id;

        const calendar_id = this.context.currentCalendar.id;

        const inviteIds = Array.from(e.currentTarget.eventParticipants.options)
        .filter(o => o.selected).map(o => Number(o.value))


        const event = {
          name: e.currentTarget.eventName.value ,
          start_time, 
          startingtime,
          end_time, 
          endingtime,
          owner_id,
          calendar_id,
          inviteIds
        }

        // const updatedEvent = {
        //     id: this.props.match.params.eventId,
        //     name: e.currentTarget.eventName.value ,
        //     start_time, 
        //     end_time, 
        //     owner_id,
        //     calendar_id,
        //     inviteIds
        // }


        console.log(inviteIds)
        this.updateEvent(event)
      }



    render() {

        const memberList = this.context.members;
        const eventId = this.props.match.params.eventId
        const event = this.context.currentEvent




        return(
            <div className='AddEventGreet, greetgroup'>
                    <div className='item'>
                        <h2>Add an Event</h2>
                    </div>

                    <div className='item'>
                        <form className='add-event-form' onSubmit={this.formSubmitted} 

                        >

                            <div>
                                <label htmlFor="eventName">Event Name</label>
                                <input type="text" name='eventName' id='eventName' defaultValue={event.name} placeholder={event.name} />
                            </div>
                            <div>
                                <label htmlFor="eventDate">Date</label>
                                <input type="date" name='eventDate' id='eventDate'  required/>
                            </div>
                            <div>
                                <label htmlFor="eventStartTime">Start Time</label>
                                <input type="time" name='eventStartTime' id='eventStartTime' required/>
                                <label htmlFor="eventEndTime">End Time</label>
                                <input type="time" name='eventEndTime' id='eventEndTime' required/>
                            </div>
                            <div>

                                    <label htmlFor="eventParticipants">Event Participants:</label>
                                    <br></br>
                                    <select name="eventParticipants" id="eventParticipants"  multiple>

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
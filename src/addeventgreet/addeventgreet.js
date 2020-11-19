import React from 'react'
import './addeventgreet.css'
import ApiContext from '../ApiContext.js'
import moment from 'moment'
import cfg from '../config.js'
import {fromApi} from '../diplomat.js'
import TokenServices from '../services/token-services';



function addEventToApi(event) {
    
    return fetch(cfg.API_ENDPOINT + 'events', {
        method: 'POST', 
        body: JSON.stringify(event),
        headers: { 
            'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
            'Content-type': 'application/json' }
    })
    
    .then(r => r.json())
    
}

export default class AddEventGreet extends React.Component {

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

    

    addEvent(event) {
        // this.context.addEvent({...event})
        addEventToApi(event)
        .then(event => {
        
            this.context.addEvent(fromApi(event))
            this.props.history.push(`/dashboard`)
        })
        .catch((e) =>  {
            
            alert("Couldn't add event, sorry")

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
                        <form className='add-event-form' onSubmit={this.formSubmitted} 
                        // onClick={this.addMembers}
                        >
                
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
                                    <select name="eventParticipants" id="eventParticipants"  multiple>
                                        
                                        {memberList.map(member =>
                                            <option key={member.id} value={member.id}>{member.name}</option>
                                        )}
                                    
                                    </select> 
                                    
                                
                                        
                            </div>

                            <button className='addbtn' type='submit'>Schedule Event</button>
                        </form>
                    </div>
                    
            </div>
        )
        
    }
}
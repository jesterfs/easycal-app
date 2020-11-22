import React from 'react'
import { Link } from 'react-router-dom'
import './eventdetails.css'
import ApiContext from '../ApiContext.js'
// import { findEvent } from '../eventhelpers'
import cfg from '../config.js'
// import moment from 'moment';
import TokenServices from '../services/token-services';
// import {fromApi} from '../diplomat.js';



function deleteEventFromApi(eventId) {
    return fetch(cfg.API_ENDPOINT + 'events/' + eventId, {
        method: 'DELETE', 
        headers: { 
            'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
            'Content-type': 'application/json' }
    })
        .catch((e) => {alert(`Couldn't delete`) 
        }
        )
}



export default class EventDetails extends React.Component {
    static contextType = ApiContext;
    
    deleteEvent(eventId) {
        deleteEventFromApi(eventId)
            .then((r) => {
                if (!r.ok) throw Error(r.status);
                return true;
            })
            .then(event => {
                this.context.deleteEvent(eventId)
                this.props.history.push(`/dashboard`)
            })
            .catch((e) => {
                if (e.message === 403) alert('Only the owner can delete the event.')
                else alert(`An error has occurred, couldn't delete event.`)
            
            })
    }

    formSubmitted = e => { 
        e.preventDefault()
        const eventId = this.props.match.params.eventId
        this.deleteEvent(eventId)
      }

    render() {
        const eventId = this.props.match.params.eventId
        this.context.changeEvent(eventId)
        const event = this.context.currentEvent
        
        if (!event) 
            return (
            <div><h1>Not Found</h1></div>
        )

        return(
            <div className='eventDetails, greetgroup'>
               <h2>{event.name}</h2> 
               <ul>
               <li className='detailsLi'>Date: {event.start.format('MM/DD/YYYY')}</li>
                   <li className='detailsLi'>Start Time: {event.start.format('hh:mm A')}</li>
                   <li className='detailsLi'>End Time: {event.end.format('hh:mm A')}</li>
                   <li className='detailsLi'>Scheduled By: {event.owner.name}</li> 
                   <li className='detailsLi'>Participants: 
                        <ul>
                            {event.members.map(member =>
                                <li className='detailsLi' key={member.id}>{member.name}</li>
                            )}
                       </ul>
                    </li>
                    <Link to={`/editevent/${eventId}`}><button className='detailsBtn addbtn'>Edit Event</button></Link>
                    <button className='detailsBtn addbtn' onClick={this.formSubmitted}>Delete Event</button> 
                </ul>       
            </div>
        )    
    }
}
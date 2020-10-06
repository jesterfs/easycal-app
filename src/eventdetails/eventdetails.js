import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './eventdetails.css'
import ApiContext from '../ApiContext.js'
import { findEvent } from '../eventhelpers'


export default class EventDetails extends React.Component {


    static contextType = ApiContext;



    render() {
        const { events=[] } = this.context
        const { eventId } = this.props.match.params
        const event = findEvent(events, eventId) 
        return(
            <div className='eventDetails, greetgroup'>
                 <h1>{event.name}</h1>
                 <ul>
                     <li>{event.date}</li>
                     <li>{event.startTime} - {event.endTime}</li>
                     <li>{event.participants}</li>
                 </ul>
                    
            </div>
        )
        
    }
}
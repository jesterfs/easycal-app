import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext.js'
import './dashboardbody.css'

class CalendarDay extends Component {
    constructor(props) {
        super(props);
     
      }

        static contextType = ApiContext;

    handleClick = e => {
        const eventId = e.target.id
        
        this.context.changeEvent(eventId)
    }

    render() {
        
   
    return (
        
        <button key={this.props.moment} style={this.props.style}>
            <time dateTime={this.props.moment.format('YYYY-MM-DD')}>
                {this.props.moment.format('DD')}
            </time>
            <ul>
                {this.props.eventList.map((e) => (
                     
                         <li  key={e.id}>
                        
                        <Link  id={e.id} onClick={this.handleClick} to={`events/${e.id}`} >
                            {e.name}
                        </Link>
                            <hr></hr>
                        </li>
                     
                    ))}
            </ul>
        </button>
    )
        
    }

}

export default CalendarDay;
// 
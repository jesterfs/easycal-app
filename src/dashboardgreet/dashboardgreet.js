import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './dashboardgreet.css'
import ApiContext from '../ApiContext.js'

export default class DashboardGreet extends React.Component {
    static contextType = ApiContext;

    formSubmitted = e => { 
        e.preventDefault()
    
        
        const calendarId = e.currentTarget.calendar.value 
       

        
    

        this.context.changeCalendar(calendarId)
      }
    

    render() {
        const {userCalendars=[]} = this.context

        return(
            <div className='DashboardGreet, greetgroup'>
                    <div className='item'>
                    { this.context.isLoggedIn() &&<h2>Welcome, {this.context.currentUser.name}!</h2>}
                    </div>
                    
                    
                    <div className='item'>
                        <form id='selectCalendarForm' onSubmit={this.formSubmitted}>
                            <select htmlFor='selectCalendarForm' name='calendar'>
                                <option>select a calendar</option>
                                {userCalendars.map(calendar => 
                                    <option value={calendar.id} id={calendar.name} key={calendar.id}>
                                        {calendar.name}
                                    </option>)}
                            </select>
                            <input type='submit' htmlFor='selectCalendarForm'></input>
                        </form>
                    </div>
                    <div className='item'>
                        <h3>{this.context.currentCalendar.name}</h3>
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addcalendar'><button>Add A Calendar</button></Link>
                        
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addevent'><button>Add An Event</button></Link>
                        
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addmember'><button>Add A Team Member</button></Link>
                        
                    </div>
                    
            </div>
        )
        
    }
}
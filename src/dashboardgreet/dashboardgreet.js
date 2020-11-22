import React from 'react'
import { Link } from 'react-router-dom'
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
        const calendar = this.context.currentCalendar;

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
                        <input className='addbtn' type='submit' htmlFor='selectCalendarForm'></input>
                    </form>
                </div>
                <div className='item'>
                    <h3>{calendar && calendar.name}</h3>
                </div>
                <div className='addButtons'>
                    <div className='item, dashboardbtn'>
                        <Link to='/addcalendar'><button className='addbtn'>Add A Calendar</button></Link>                        
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addevent'><button className='addbtn'>Add An Event</button></Link>                        
                    </div>
                    <div className='item, dashboardbtn'>
                        <Link to='/addmember'><button className='addbtn'>Add A Team Member</button></Link>                        
                    </div>
                </div>                    
            </div>
        )        
    }
}
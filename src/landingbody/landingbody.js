import React from 'react'

import './landingbody.css'

import calendarImg from './images/calendar-screen.png'
import memberImg from './images/addmember-screen.png'
import eventImg from './images/addevent-screen.png'

export default class LandingBody extends React.Component {
    render() {
        return(
            <div className='landingbody'>
                <div className='landinggroup group1'>
                        <div className='item'>
                            <img src={calendarImg} alt="An easycal calendar that reads 'Welcome, John Doe' and 'your business calendar'" className="landing-img"/>
                        </div>
                        
                        <div className='item'>
                            <h3>Create an Office Wide Calendar</h3>
                            <p>The modern office is a busy office. As your company grows, you add more and more moving parts, and important dates start slipping through the cracks. 
                                Get your entire team on the same page with EasyCal. No more missed deadlines. No more missed meetings. 
                            </p>
                        </div>
                        
                </div>
                <div className='landinggroup3 group2'>
                        <div className='item'>
                            <h3>Add Team Members with Ease</h3>
                            <p>
                                Many companies have to much going on to have everyone on a single calendar. Whether you want to divide it by branch, department, or project, EasyCal has you covered. Add team members to 
                                specific calendars to make sure they see what matters without cluttering their screen. They can even make their 
                                own calendars for smaller projects.  
                            </p>
                        </div>
                        
                        <div className='item block2'>
                            <img src={memberImg} alt="The easycal add team member interface" className="landing-img"/>
                        </div>
                        
                        
                        
                </div>

                <div className='landinggroup group1 lastgroup'>
                        <div className='item'>
                            <img src={eventImg} alt="The easycal add event interface" className="landing-img"/>
                        </div>
                        
                        <div className='item'>
                            <h3>Create Events and Invite Members</h3>
                            <p>Events and deadlines are what EasyCal is all about. With our simple to use database, you can add specific members to 
                                each event, making sure everyone knows exactly where they need to be.  
                            </p>
                        </div>
                        
               

                
                        
                        
                        
                        
                        
                </div>
            </div>
                
        )
        
    }
}
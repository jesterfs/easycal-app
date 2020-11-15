import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './landingbody.css'
import image1 from './images/screenshot-placeholder.gif'

export default class LandingBody extends React.Component {
    render() {
        return(
            <div className='landingbody'>
                <div className='landinggroup group1'>
                        <div className='item'>
                            <img src={image1} alt="placeholder image" className="landing-img"/>
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
                            <h3>Create an Office Wide Calendar</h3>
                            <p>The modern office is a busy office. As your company grows, you add more and more moving parts, and important dates start slipping through the cracks. 
                                Get your entire team on the same page with EasyCal. No more missed deadlines. No more missed meetings. 
                            </p>
                        </div>
                        
                        <div className='item block2'>
                            <img src={image1} alt="placeholder image" className="landing-img"/>
                        </div>
                        
                        
                        
                </div>

                <div className='landinggroup group1'>
                        <div className='item'>
                            <img src={image1} alt="placeholder image" className="landing-img"/>
                        </div>
                        
                        <div className='item'>
                            <h3>Create an Office Wide Calendar</h3>
                            <p>The modern office is a busy office. As your company grows, you add more and more moving parts, and important dates start slipping through the cracks. 
                                Get your entire team on the same page with EasyCal. No more missed deadlines. No more missed meetings. 
                            </p>
                        </div>
                        
                </div>

                <div className='landinggroup2 group2'>
                        <div className='item'>
                            <ul>
                                <h3>Additional Features</h3>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                            </ul>
                            

                        </div>
                        
                        <div className='item '>
                            <h3>Create Your EasyCal Today</h3>
                            <button>Sign Up</button>
                        </div>
                        
                        
                        
                </div>
            </div>
                
        )
        
    }
}
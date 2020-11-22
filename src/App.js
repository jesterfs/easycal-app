import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LandingNav from './landingnav/landingnav';
import LandingGreet from './landinggreet/landinggreet';
import LandingBody from './landingbody/landingbody';
import DashboardNav from './dashboardnav/dashboardnav';
import DashboardGreet from './dashboardgreet/dashboardgreet';
import DashboardBody from './dashboardbody/dashboardbody';
import AddEventGreet from './addeventgreet/addeventgreet';
import EditEventGreet from './addeventgreet/editeventgreet'
import AddMemberNav from './addmembernav/addmembernav';
import AddMemberGreet from './addmembergreet/addmembergreet';
import SignUpNav from './signupnav/signupnav';
import SignUpGreet from './signupgreet/signupgreet';
import LoginNav from './loginnav/loginnav';
import LoginGreet from './logingreet/logingreet';
import AccountGreet from './accountgreet/accountgreet';
import AccountNav from './accountnav/accountnav';
import AddCalendar from './addcalendar/addcalendar';
import ChangePassword from './changepassword/changepassword';
import Footer from './footer/footer';
import ApiContext from './ApiContext';
import EventDetails from './eventdetails/eventdetails'
import cfg from './config.js'
import moment from 'moment';
import TokenServices from './services/token-services';
import './app.css';
import {fromApi} from './diplomat'

class App extends Component {

  state = {
    members: [],
    events: [],
    currentUser: null,
    userCalendars: [],
    currentCalendar: [],
    currentEvent: null,
    currentEventOwner: null
    
};

//User Functions====================================

  handleAddMember = (member) => {
    this.setState({members: [...this.state.members, member]})
    this.handleChangeCalendar(this.state.currentCalendar.id)
  }

  clearUserData = () => {
    this.setState({
      members: [],
      events: [],
      currentUser: null,
      userCalendars: [],
      currentCalendar: [],
      currentEvent: null,
      currentEventOwner: null
    })
  }

  fetchUserData = (id) => {
    fetch(cfg.API_ENDPOINT + `members/${id}`, {
      method: 'GET', 
      headers: {
        'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
        'Content-Type': 'application/json',
      }
    })
        .then(response => response.json())
        .then(data => 
          this.setState({
            userCalendars: data.calendars,
            currentUser: data
          }, 
          ()  => {
            if (this.state.userCalendars && this.state.userCalendars.length)
              this.handleChangeCalendar(this.state.userCalendars[0].id)
          }
        ))
  }

  isLoggedIn = () => !!this.state.currentUser;

  handleChangeUser = (user) => {
    this.setState({currentUser: user })
  }

  //Calendar Functions =========================================

  handleChangeCalendar = (calendarId) => {
    fetch(cfg.API_ENDPOINT + `calendars/${calendarId}`, {
      method: 'GET', 
      headers: {
        'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
        'Content-Type': 'application/json',
      }  
    })
        .then(response => response.json())
        .then(data => 
          this.setState({
          currentCalendar: data,
          members: data.members
        },
          this.setEvents(data.events)
      )        
      )      
      }

  handleAddCalendar = (calendar) => {
    this.setState({userCalendars: [...this.state.userCalendars, calendar] })
    this.handleChangeCalendar(calendar.id)
  }

  //Event Functions====================================== 
  setEvents = (events) => {
    if(events) {
      this.setState({events: events.map(fromApi)})
    }
  }


  handleChangeEvent = (eventId) => {
    return fetch(cfg.API_ENDPOINT + 'events/' + eventId, {
      method: 'GET', 
      headers: {
          'Authentication' : `Bearer ${TokenServices.getAuthToken()}`,
        'Content-type': 'application/json' }
  })
        .then(r => r.json())
        .then(r => 
          this.setState({currentEvent: fromApi(r)}))    
  }


  handleDeleteEvent = (eventId) => {  
    this.setState({
        events: this.state.events.filter(event => event.id !== eventId)       
    });
  };

  handleAddEvent = (event) => {   
    this.setState({events: [...this.state.events, event] })    
  }

  handleUpdateEvent = updatedEvent => {
    const newEvents = this.state.events.map(event =>
      (event.id === updatedEvent.id)
        ? updatedEvent
        : event
    )
    this.setState({
      events: newEvents
    })
  };



  componentDidMount() {
    const info = TokenServices.getAuthInfo(); 
    if (info) this.fetchUserData(info.userId)    
  }

  renderNavRoutes() {
    return(
      <>
      <Route exact path='/' component={LandingNav} />
      <Route path='/dashboard' component={DashboardNav} />
      <Route path='/signup' component={SignUpNav} />
      <Route path='/login' component={LoginNav} />
      <Route path='/addmember' component={AddMemberNav} />
      <Route path='/addevent' component={AddMemberNav} />
      <Route path='/events/:eventId' component={AddMemberNav} />
      <Route path='/editevent/:eventId' component={AddMemberNav} />
      <Route path='/account' component ={AccountNav} />
      <Route path='/changepassword' component={AddMemberNav} />
      <Route path='/addcalendar' component={AddMemberNav} />

      
      </>
    )
  }

  renderGreetingRoutes() {
    return(
      <>
      <Route exact path='/' component={LandingGreet} />
      <Route exact path='/dashboard' component={DashboardGreet} />
      <Route path='/addevent' component={AddEventGreet} />
      <Route path='/signup' component={SignUpGreet} />
      <Route path='/login' component={LoginGreet} />
      <Route path='/addmember' component={AddMemberGreet} />
      <Route path='/events/:eventId' component ={EventDetails} />
      <Route path='/editevent/:eventId' component ={EditEventGreet} />
      <Route path='/account' component ={AccountGreet} />
      <Route path='/changepassword' component ={ChangePassword} />
      <Route path='/addcalendar' component ={AddCalendar} />
      </>
    )
  }

  renderBodyRoutes() {
    return(
      <>
      <Route exact path='/' component={LandingBody} />
      <Route exact path='/dashboard' component={DashboardBody} />
      </>
    )
  }
  
  renderFooterRoutes() {
    return(
      <>
      <Route path='/' component={Footer} />
      </>
    )
  }


  
  render() {
    const value = {
      members: this.state.members,
      events: this.state.events,
      userCalendars: this.state.userCalendars,
      currentCalendar: this.state.currentCalendar,
      currentUser: this.state.currentUser,
      currentEvent: this.state.currentEvent,
      currentEventOwner: this.state.currentEventOwner,
      deleteEvent: this.handleDeleteEvent,
      addEvent: this.handleAddEvent, 
      addMember: this.handleAddMember,
      changeUser: this.handleChangeUser,
      changeCalendar: this.handleChangeCalendar,
      isLoggedIn: this.isLoggedIn,
      addCalendar: this.handleAddCalendar,
      fetchUserData: this.fetchUserData,
      changeEvent: this.handleChangeEvent,
      updateEvent: this.handleUpdateEvent,
      clearUser: this.clearUserData
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav>
            {this.renderNavRoutes()}
          </nav>
          <main className='App'>
            {this.renderGreetingRoutes()}
            {this.renderBodyRoutes()}
          </main>
          <footer>
            {this.renderFooterRoutes()}
          </footer>
        </div>
      </ApiContext.Provider> 
    );
  } 
}

export default App;
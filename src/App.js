import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import LandingNav from './landingnav/landingnav';
import LandingGreet from './landinggreet/landinggreet';
import LandingBody from './landingbody/landingbody';
import DashboardNav from './dashboardnav/dashboardnav';
import DashboardGreet from './dashboardgreet/dashboardgreet';
import DashboardBody from './dashboardbody/dashboardbody';
import AddEventGreet from './addeventgreet/addeventgreet';
import AddMemberNav from './addmembernav/addmembernav';
import AddMemberGreet from './addmembergreet/addmembergreet';
import SignUpNav from "./signupnav/signupnav";
import SignUpGreet from "./signupgreet/signupgreet";
import LoginNav from "./loginnav/loginnav";
import LoginGreet from "./logingreet/logingreet";
import AccountGreet from "./accountgreet/accountgreet";
import AccountNav from "./accountnav/accountnav";
import ChangePassword from "./changepassword/changepassword";
import Footer from "./footer/footer";
import ApiContext from './ApiContext';
import EventDetails from './eventdetails/eventdetails'
import cfg from './config.js'
import moment from 'moment';

class App extends Component {

  state = {
    members: [],
    events: [],
    currentUser: null,
    userCalendars: [],
    currentCalendar: [
      
    ]
};

// setCalendars = userCalendars => {
//   this.setState({
//     userCalendars
    
//   })
// }

fetchUserData() {
  fetch(cfg.API_ENDPOINT + `members/${this.state.currentUser.id}`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    }
    
  })
    .then(response => response.json())
    .then(data => this.setState({
      userCalendars: data.calendars
    }, 
    ()  => {
      if (this.state.userCalendars.length)
         this.handleChangeCalendar(this.state.userCalendars[0].id)
    }
  ))
    

}

handleChangeCalendar = (calendarId) => {

  fetch(`http://localhost:8000/api/calendars/${calendarId}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }
      
    })
      .then(response => response.json())
      .then(data => this.setState({
        currentCalendar: data,
        events: data.events.map((event) => ({...event, start: moment(event.start), end: moment(event.end)})),
        members: data.members
      }))

}

isLoggedIn = () => !!this.state.currentUser;

handleChangeUser = (user) => {
  this.setState({currentUser: user })
}

handleDeleteEvent = (eventId) => {
  console.log(eventId, this.state.events)
  this.setState({
      events: this.state.events.filter(event => event.id !== eventId)
      
  });
};

handleAddEvent = (event) => {
  console.log(this.state.members)
  this.setState({events: [...this.state.events, event] })
  // console.log(this.state.members)
}

handleAddMember = (member) => {
  this.setState({members: [...this.state.members, member]})
}


componentDidMount() {
  if(this.isLoggedIn()) {
    this.fetchUserData()
  }

  this.setState({ currentUser: { id: 1 } }, this.fetchUserData);
}

  renderNavRoutes() {
    return(
      <>
      <Route exact path="/" component={LandingNav} />
      <Route path="/dashboard" component={DashboardNav} />
      <Route path="/signup" component={SignUpNav} />
      <Route path="/login" component={LoginNav} />
      <Route path="/addmember" component={AddMemberNav} />
      <Route path="/addevent" component={AddMemberNav} />
      <Route path="/events/:eventId" component={AddMemberNav} />
      <Route path="/account" component ={AccountNav} />
      <Route path="/changepassword" component={AddMemberNav} />

      
      </>
    )
  }

  renderGreetingRoutes() {
    return(
      <>
      <Route exact path="/" component={LandingGreet} />
      <Route exact path="/dashboard" component={DashboardGreet} />
      <Route path="/addevent" component={AddEventGreet} />
      <Route path="/signup" component={SignUpGreet} />
      <Route path="/login" component={LoginGreet} />
      <Route path="/addmember" component={AddMemberGreet} />
      <Route path="/events/:eventId" component ={EventDetails} />
      <Route path="/account" component ={AccountGreet} />
      <Route path="/changepassword" component ={ChangePassword} />
      </>
    )
  }

  renderBodyRoutes() {
    return(
      <>
      <Route exact path="/" component={LandingBody} />
      <Route exact path="/dashboard" component={DashboardBody} />
      {/* <Route path="/signup" component={SignUpGreet} />
      <Route path="/login" component={LoginGreet} /> */}
      </>
    )
  }
  
  renderFooterRoutes() {
    return(
      <>
      <Route path="/" component={Footer} />
      {/* <Route path="/dashboard" component={DashboardGreet} />
      <Route path="/signup" component={SignUpGreet} />
      <Route path="/login" component={LoginGreet} /> */}
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
      deleteEvent: this.handleDeleteEvent,
      addEvent: this.handleAddEvent, 
      addMember: this.handleAddMember,
      changeUser: this.handleChangeUser,
      changeCalendar: this.handleChangeCalendar,
      isLoggedIn: this.isLoggedIn
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
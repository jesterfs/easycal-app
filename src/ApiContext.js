import React from 'react'

export default React.createContext({
members: [],
events: [],
currentUser: [],
userCalendars: [],
currentCalendar: [],
addEvent: () => {},
addMember: () => {},
deleteEvent: () => {},
changeUser: () => {},
changeCalendar: () => {},
isLoggedIn: () => {}
})
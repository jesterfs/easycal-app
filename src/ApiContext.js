import React from 'react'

export default React.createContext({
members: [],
events: [],
currentUser: [],
userCalendars: [],
currentCalendar: [],
currentEvent: [],
currentEventOwner: [],
addEvent: () => {},
addMember: () => {},
deleteEvent: () => {},
changeUser: () => {},
changeCalendar: () => {},
isLoggedIn: () => {},
addCalendar: () => {},
fetchUserData: () => {},
changeEvent: () => {},
updateEvent: () => {},

})
import React from 'react'

export default React.createContext({
    members: [],
    events: [],
    currentUser: null,
    userCalendars: [],
    currentCalendar: null,
    currentEvent: null,
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
    clearUser: () => {},
    setEvents: () => {}
})
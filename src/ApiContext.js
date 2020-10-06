import React from 'react'

export default React.createContext({
members: [],
events: [],
addEvent: () => {},
addMember: () => {},
deleteEvent: () => {},
})
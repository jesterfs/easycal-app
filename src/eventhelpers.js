export const findEvent = (events=[], eventId) =>
  events.find(event => event.id == eventId)
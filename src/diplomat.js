import moment from 'moment';

export function fromApi(event) {
    if ('start_time' in event) {
        event.start = event.start_time;
        event.end = event.end_time
        delete event.start_time;
        delete event.end_time;
      }
    if ('startTime' in event) {
      event.start = event.startTime;
      event.end = event.endTime
      delete event.startTime;
      delete event.endTime;
    }
    return {
           ...event,
           start: moment(event.start),
          end: moment(event.end)
    }
 }
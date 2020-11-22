import React from 'react'

import ApiContext from '../ApiContext.js'
import './dashboardbody.css'
import CalendarDay from './calendarday'
import moment from 'moment';


export default class DashboardBody extends React.Component {

    static contextType = ApiContext;
    
    eventsFor = (date) => {
        const eventList = this.context.events
        const x = eventList.filter(
          event => event.start.isSame(date, 'day')
          );
          return x
      }

    componentDidMount(){
        
    }

    render() {
        
        const now = moment();
        const year = now.year();
        const month = now.month();
        const start = moment([year, month , 1]);
        const days = start.daysInMonth()
        const dayList = new Array(days-1).fill(null).map((_, i) => i+2);
        const firstStyle = {
            gridColumn: start.day()
        }

        return(
            <div>
                <h3 className='monthName'>{moment.months(month)}</h3>
                <div className='date-grid'>
                
                    <CalendarDay style={firstStyle} 
                        moment={start} 
                        eventList={this.eventsFor(start)}
                    />

                    {dayList.map((dayNumber) => {
                        const date = moment([year, month , dayNumber]) 
                        return <CalendarDay 
                                    moment= {date}
                                    key= {date}
                                    eventList={this.eventsFor(date)}
                                />
                    })}
                </div>
            </div>
        )
    }
}
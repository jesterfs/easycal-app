import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext.js'
import './dashboardbody.css'
import CalendarDay from './calendarday'
import moment from 'moment';


export default class DashboardBody extends React.Component {

    static contextType = ApiContext;
    
    eventsFor = (date) => {
        
        const eventList = this.context.events
        if (eventList.length) {
            console.log(eventList[0].start.isSame(date, 'day'))
         }
        
        
        const x = eventList.filter(
        //    => 
          event => event.start.isSame(date, 'day')
          );
          console.log(x)
          return x
      }

      

    // CalendarDay(
    //     {
    //         style={},
    //         moment,
    //         eventList
    //       }
    // ) {
    //     return (
    //         <button style={style}>
    //             <time dateTime={moment.format('YYYY-MM-DD')}>
    //                 {moment.dayOfMonth()}
    //             </time>
    //             <ul>
    //                 {eventList.map((e) => (
    //                     <Link to={`events/${e.id}`}>
    //                     <li key={e.id}>{e.name}</li>
    //                     </Link>
    //                     ))}
    //             </ul>
    //         </button>
    //     )
            
     

    // }
    

    render() {

        

        const now = moment();
        const year = now.year();
        const month = now.month();
        const day = now.day();
        // const firstDayOfMonth = firstDayOfMonth()

        const start = moment([year, month , 1]);
        
        // moment().endOf('month').from(start);
        
        const days = start.daysInMonth()
        
        const dayList = new Array(days-1).fill(null).map((_, i) => i+2);
        const firstStyle = {
        gridColumn: start.day()
        }

        return(
            <div className='date-grid'>
                <CalendarDay style={firstStyle} 
             moment={start} 
             eventList={this.eventsFor(start)}
             />

             {dayList.map((dayNumber) => {
                const date = moment([year, month , dayNumber]) 
                return <CalendarDay moment= {date}
                                    key= {date}
                                    eventList={this.eventsFor(date)}
                                    />
              })}
            </div>
            

        )
    }
}
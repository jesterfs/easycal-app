import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CalendarDay from './calendarday'
import renderer from 'react-test-renderer';
import moment from 'moment';

const eventList = [
    {
        "id": 1,
        "name": "adada",
        "start_time": "2020-11-03T01:29:00.000Z",
        "end_time": "2020-11-03T01:32:00.000Z",
        "startingtime": "17:29",
        "endingtime": "17:32",
        "calendar_id": 1,
        "owner_id": 1
    }
];
        const now = moment();
        const year = now.year();
        const month = now.month();
        
        

        const start = moment([year, month , 1]);
        
       
        
        const days = start.daysInMonth()
        
        const dayList = new Array(days-1).fill(null).map((_, i) => i+2);
        const firstStyle = {
        gridColumn: start.day()
        }


describe('CalendarDay component', () => {
    
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <CalendarDay 
            eventList={eventList}
            style={firstStyle}
            moment={start}
        />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders the UI as expected', () => {
    const div = document.createElement('div')
    const tree = renderer
      .create(<BrowserRouter>
        <CalendarDay 
            eventList={eventList}
        />
      </BrowserRouter>,
      div)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

});
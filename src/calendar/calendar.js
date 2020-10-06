import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext.js'
import './calendar.css'
import dayjs from "dayjs";
import Calendar from 'react-calendar';


export default class CalendarPage extends React.Component {

    state = {
        date: new Date(),
    }

    static contextType = ApiContext;


     onChange = date => this.setState({ date });

     render() {

        return(
            <div>
                <Calendar 
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
     }


}

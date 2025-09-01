import React, {useState} from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
//import BigCalendar from 'react-big-calendar';

import events from "../Utils/events";


function MoreLink()
{
    const localizer = momentLocalizer(moment);
    console.log("Events:", events);
    return (
    <Calendar
                localizer={localizer}
                events={events} 
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
          />
    );



}

export default MoreLink;
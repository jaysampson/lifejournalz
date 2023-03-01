import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop:"10px" }}>
      <Calendar
        value={date}
        onChange={(date) => setDate(date)}
        calendarType="US"
      />
    </div>
  )
}

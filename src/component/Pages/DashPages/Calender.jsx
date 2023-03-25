import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <h2 style={{textAlign:"center", marginTop:"20px"}}>Calendar</h2>
      <p style={{textAlign:"center", fontSize:"14px"}}>Select a date</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10px" }}>
        <Calendar
          value={date}
          onChange={(date) => setDate(date)}
          calendarType="US"
        />
      </div>
    </>
  )
}

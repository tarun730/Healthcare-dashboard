import React from 'react'


const UpcomingSchedule = (props) => {
    // console.log(props);
    return (
        <div className="schedule-container">
          <div className="appointment-section">
            {props.calendarAppointments.map((appt, index) => (
              <ScheduleCard key={index} {...appt} />
            ))}
          </div>
    
          <h3 className="section-heading">The Upcoming Schedule</h3>
    
          {props.UpcomingSchedule?.map((i,index) => (
            <div key={index} className="schedule-day">
              <strong>On {i.day}</strong>
              <div className="event-list">
                {i.schedule.map((event, idx) => (
                  <ScheduleCard key={idx} {...event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
}


const ScheduleCard = (
    {
        time,title,icon,doctor
    }
) => (
    <div className="ScheduleCard"  style={title === "Dentist" ? { color: "white",background:"#3030a0" } : {}}>
      
      <div className="card-title">
       <span> {title}</span> <span> {icon}</span>
      </div>
      <div className="card-time">{time}</div>
      {doctor && <div className="card-doctor">{doctor}</div>}
    </div>
  );

export default UpcomingSchedule
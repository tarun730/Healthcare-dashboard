
import React from 'react'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'

const DashboardOverview = (props) => {
  return (
    <div className='DashboardOverview'>
    <CalendarView/>
    <UpcomingSchedule  {...props}/>
</div>
  )
}

export default DashboardOverview
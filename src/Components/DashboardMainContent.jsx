import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import { healthStatus } from '../data/HealthStatus.js'
import { UpcomingSchedule } from '../data/UpcomingSchedule';
import { calendarAppointments } from '../data/appointments';
import { activityData } from '../data/weeklyActivitySchedule';
import DashboardOverview from './DashboardOverview'
import WeeklySchedule from './WeeklySchedule'



export const DashboardMainContent = () => {
  return (
    <>
      <div className="healthoverview">
        <div className='dashboard_filter'>
          <h2>Dashboard</h2>
          <select name="this week" id="">
            <option value="">This week</option>
          </select>
        </div>

        <div className='mainarea'>
          <AnatomySection />
          <HealthStatusCards data={healthStatus} />
        </div>
        <div className='detailanatomy'><h2>Details</h2> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO3YvUrEQBAH8FELEa+yE668+8+SIg/gGyiCIPgO+hC6zJydd4WFpa2FeE9gY6e9tYpaiKJ2NsIRWfzAeKm0MBPmBwMpUuyf/chsiJxzzjnnnLOEWdYAfQL0DpAVsgqQR2YtUgHyCsgiWcQsD59B3sPoC3NvgSwuLWYdlcPIMxBzsoZZ1r8H+aj7ECLIGkA3K8JchLA9T9YA0v8ZBtDzLItzZEsxAch+xcycZVlskS2HU4AejYeR405nd5osabcHM4CejC8zGaagpZe7XV0C9KpiGutee6UgzHJTg0H9skQbEkTlK0jqaZjlsgaDKv60tGxudj0gipNk5/iVofHjt6j8IAJymuc7s2QFsw7MtyiAbJlvGoHehvk2PgRdbcTFCtDrhlx19bYRPx9C0OUUJjWw6fm/x+Occ8455xrmDUE1I534oL1GAAAAAElFTkSuQmCC" alt="long-arrow-right"></img></div>
        <WeeklySchedule activityData={activityData}/>
     
      </div>
      <DashboardOverview calendarAppointments={calendarAppointments} UpcomingSchedule={UpcomingSchedule} />
    </>
  )
}

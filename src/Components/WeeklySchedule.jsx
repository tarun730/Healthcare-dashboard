import React from 'react'

const WeeklySchedule = (props) => {
    return (
        <div className='WeeklySchedule'>
            <div class="activity-card">
                <div class="header">
                    <h2>Activity</h2>
                    <span>3 appointments on this week</span>
                </div>
                <div class="chart">
                    {props.activityData.map(day => (
                        <div className="day" key={day.day}>
                            <div className="multibar">
                                {day.bars.map((bar, index) => (
                                    <div
                                        key={index}
                                        className={`bar ${bar.color}`}
                                        style={{ height: `${bar.height}px` }}
                                    ></div>
                                ))}
                            </div>
                            <span>{day.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeeklySchedule
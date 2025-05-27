import React from 'react'

const CalendarView = () => {
    return (
        <div>
            <div className="nav">
                <div className="month">October 2021</div>
                <div className='calenderdatechange'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nO2UQQrCQAxFeww3uil9aQuCB/AAeqqS9Gx6BwVR68KNeIWKSkErLoTM4KIfsn1/+JP8JBn014J6LmK7IPAsq2agVxFr3eEiNgW93OHuBnleAXbu4OJpUJbVBOz4ChcvgzStx2D7Plx+nxPosv/yEejWAd4+R5s3A7C1H9w+YwVdBTUoHxHZJlhEvp+sDdSL5Pua6iHImnYqCsuCHVqUqohSdlHqelA03QC1UBjNSg19YwAAAABJRU5ErkJggg==" alt="arrow-pointing-left"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3VSwrCMBSF4YJuQ1FKz4FuomNxUSG3u3Ev4lBUhPpaRyXUgdQ2OEiuA/NDhuWDmybJslQq5W0zqSozzbQjZQfIqSzNXBtu3QLkAtRLdZjaON9gVZw9uMNt48WLwq4BeQx9HGCdR3840t4joX6ccdH2NfajO+s/gOUwBN9ijzrP69nHqAG7Iu1VFQ3VyL42pFkEQ76BVVBXH1W/MqGJugDZkrJXfxa7euc0lfqbnsraY/kyF/E1AAAAAElFTkSuQmCC" alt="right--v1"></img>
                </div>
            </div>

            <div className="calendar">
                <div className="day">
                    <div className="day-header">Mon</div>
                    <div className="date">25</div>
                    <div className="time">10:00</div>
                    <div className="time">11:00</div>
                    <div className="time">12:00</div>
                </div>

                <div className="day" style={{ backgroundColor: "#e6edfb" }}>
                    <div className="day-header">Tues</div>
                    <div className="date">26</div>
                    <div className="time">08:00</div>
                    <div className="time selected">09:00</div>
                    <div className="time">10:00</div>
                </div>

                <div className="day">
                    <div className="day-header">Wed</div>
                    <div className="date">27</div>
                    <div className="time">12:00</div>
                    <div className="time">13:00</div>
                </div>

                <div className="day">
                    <div className="day-header">Thurs</div>
                    <div className="date">28</div>
                    <div className="time">10:00</div>
                    <div className="time highlight">11:00</div>
                </div>

                <div className="day">
                    <div className="day-header">Fri</div>
                    <div className="date">29</div>
                    <div className="time">14:00</div>
                    <div className="time">16:00</div>
                </div>

                <div className="day">
                    <div className="day-header">Sat</div>
                    <div className="date">30</div>
                    <div className="time highlight">12:00</div>
                    <div className="time">14:00</div>
                    <div className="time">15:00</div>
                </div>

                <div className="day">
                    <div className="day-header inactive">Sun</div>
                    <div className="date inactive">31</div>
                    <div className="time highlight">09:00</div>
                    <div className="time inactive">10:00</div>
                    <div className="time inactive">11:00</div>
                </div>
            </div>
        </div>
    )
}
export default CalendarView
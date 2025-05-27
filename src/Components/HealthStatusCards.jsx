import React from 'react'


const HealthStatusCards = (props) => {
    return (
        <div>
            
            <div className="anatomy-cards">
                {
                    props.data.map((i, index) => (
                        <div key={index} className="card Lungs">
                            <div >
                                <img src={i.Image} alt="" srcSet="" />
                                <h3>{i.part}</h3>
                            </div>
                            <p className='date'>Date:{i.date}</p>
                            <div className="progress-bar">
                                <div style={{width:`${i.status}%`}} class="progress-fill"></div>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default HealthStatusCards
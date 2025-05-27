import React from 'react'

const Sidebar = (props) => {
    console.log(props);
    return (

        <div className="sidebar">
            {
                props.navlinks.map((i,index) => (
                    <div key={index}>
                        <h2>{i.category}</h2>
                        <ul>
                            {
                                i.links.map((i,link) => (
                                    <li key={link}> <img width="15" height="15" src={i.icon} alt={i.name} /> <a href="#">{i.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>

    )
}

export default Sidebar
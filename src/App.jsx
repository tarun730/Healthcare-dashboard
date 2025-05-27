import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import { DashboardMainContent } from './Components/DashboardMainContent'
import './Styles/Style.css'
import { navigationLinks } from './data/navigationLinks'

function App() {
  return (
    <>
    <Header/>
    <div style={{ display: 'grid',
    gridTemplateColumns: '15% 42% 43%'}}>
    <Sidebar navlinks={navigationLinks}/>
    <DashboardMainContent/>
    </div>
    </>
  )
}

export default App

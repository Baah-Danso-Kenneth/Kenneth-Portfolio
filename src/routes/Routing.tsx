import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import History from '../pages/History'
import ContactPage from '../components/ContactPage/ContactPage'
import LandingPage from '../components/LandingPage/LandingPage'
import Contact from '../pages/Contact'
import HistoryPage from '../components/HistoryPage/HistoryPage'
import Portfolio from '../pages/Portfolio'
import PortfolioPage from '../components/PortfolioPage/PortfolioPage'


function Routing() {
  return (
      <Routes>

        <Route path="/" element={<HomePage/>}>
          <Route  path='' element={<LandingPage/>}/>
        </Route>


      <Route path='contact' element={<Contact/>}>
        <Route path='' element={<ContactPage/>}/>
      </Route>

      <Route path='history' element={<History/>}>
        <Route path='' element={<HistoryPage/>}/>
      </Route>

      <Route path='portfolio' element={<Portfolio/>}>
        <Route path='' element={<PortfolioPage/>}/>
      </Route>

      </Routes>
  )
}

export default Routing
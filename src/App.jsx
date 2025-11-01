import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Homepage from './Components/Homepage.jsx'
import StationeryItemsForm from './Components/Stationery_Items_Form.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//setup router
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/order" element={<StationeryItemsForm />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

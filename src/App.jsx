import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Homepage from './Components/Homepage.jsx'
import StationeryItemsForm from './Components/Stationery_Items_Form.jsx'
import PrintingServicesForm from './Components/Printing_Services_Form.jsx'
import Combined_Calculation_Tax from './Components/Combined_Calculation_Tax.jsx'
import OrderSummaryAndInvoice from './Components/Order_Summary_And_Invoice.jsx'
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
      <Routes>
        <Route path="/printing" element={<PrintingServicesForm />} />
      </Routes>
      <Routes>
        <Route path="/combined" element={<Combined_Calculation_Tax />} />
      </Routes>
      <Routes>
        <Route path="/summary" element={<OrderSummaryAndInvoice />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App

// src/components/AppContainer.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import CustomerInformation from "./CustomerInformation"; // Import the new component

function AppContainer() {
  // State for customer information
  const [customerData, setCustomerData] = useState({
    name: "",
    accountNumber: "",
    premiseAddress: "",
    mailingAddress: "",
  });

  const [meterData, setMeterData] = useState({
    meterNumber: "",
    meterErrorType: "",
    estimationStartDate: "",
    meterRemovalDate: "",
    meterErrorDate: "",
    // Add more meter fields as needed
  });

  // Dark mode state and toggle function (from your existing code)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isDarkMode={isDarkMode}
                customerData={customerData}
                setCustomerData={setCustomerData}
                meterData={meterData}
                setMeterData={setMeterData}
              />
            }
          />

          {/* Add more routes/components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default AppContainer;

// src/components/Home.js
import React from "react";
import CustomerInformation from "./CustomerInformation";
import MeterInformation from "./MeterInformation";
import EstimationSegment from "./EstimationSegment";
import EstimationCalculator from "./EstimationCalculator";

function Home({
  isDarkMode,
  customerData,
  setCustomerData,
  meterData,
  setMeterData,
}) {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Dashboard</h2>
      <MeterInformation
        meterData={meterData}
        setMeterData={setMeterData}
        isDarkMode={isDarkMode}
      />
      <CustomerInformation
        customerData={customerData}
        setCustomerData={setCustomerData}
        isDarkMode={isDarkMode}
      />
      <EstimationCalculator isDarkMode={isDarkMode} />
    </div>
  );
}

export default Home;

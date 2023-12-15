// src/components/MeterInformation.js
import React, { useState } from "react";
import { Card, Button, Offcanvas } from "react-bootstrap";

function MeterInformation({ meterData, setMeterData, isDarkMode }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isFormSaved, setIsFormSaved] = useState(false);
  const [placement, setPlacement] = useState("start"); // Default placement

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure setMeterData is a function before calling it
    if (typeof setMeterData === "function") {
      setMeterData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    // Add your logic to save the meter information, e.g., send it to an API or update a database
    console.log("Saving meter information:", meterData);
    setIsFormSaved(true);
  };

  const handleClearAll = () => {
    // Clear the entire customer information object
    setMeterData({
      meterNumber: "",
      meterErrorType: "",
      estimationStartDate: "",
      meterRemovalDate: "",
      meterErrorDate: "",
    });

    // Reset the form saved status
    setIsFormSaved(false);
  };

  const togglePlacement = () => {
    // Toggle between "start" and "end" placement
    setPlacement((prevPlacement) =>
      prevPlacement === "start" ? "end" : "start"
    );
  };

  return (
    <div>
      <Card
        className={`${
          isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
        } my-2`}
      >
        <Card.Header>
          <Button
            variant="transparent"
            onClick={() => setShowOffcanvas(true)}
            className={isDarkMode ? "text-light" : "text-dark"} // Dynamically set text color based on isDarkMode
          >
            Show Meter Information{" "}
            {isFormSaved ? (
              <span role="img" aria-label="check" style={{ color: "green" }}>
                ✔️
              </span>
            ) : (
              <span role="img" aria-label="cross" style={{ color: "red" }}>
                ❌
              </span>
            )}
          </Button>
        </Card.Header>
      </Card>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement={placement}
        className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Meter Information</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <div className="mb-3 row">
              <label htmlFor="meterNumber" className="col-sm-6 col-form-label">
                Meter Number
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="meterNumber"
                  name="meterNumber"
                  value={meterData ? meterData.meterNumber : ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="meterErrorType"
                className="col-sm-4 col-form-label"
              >
                Meter Error Type
              </label>
              <div className="col-sm-8">
                <select
                  className="form-select"
                  id="meterErrorType"
                  name="meterErrorType"
                  value={meterData ? meterData.meterErrorType : ""}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select an error type
                  </option>
                  <option value="SIO Prolonged Estimation">
                    SIO Prolonged Estimation
                  </option>
                  <option value="Fatal Meter Error">Fatal Meter Error</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="meterErrorDate"
                  className="col-sm-4 col-form-label"
                >
                  Meter Error Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    className="form-control"
                    id="meterErrorDate"
                    name="meterErrorDate"
                    value={meterData ? meterData.meterErrorDate : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="meterRemovalDate"
                  className="col-sm-4 col-form-label"
                >
                  Meter Removal Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    className="form-control"
                    id="meterRemovalDate"
                    name="meterRemovalDate"
                    value={meterData ? meterData.meterRemovalDate : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="estimationStartDate"
                  className="col-sm-4 col-form-label"
                >
                  Estimation Start Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    className="form-control"
                    id="estimationStartDate"
                    name="estimationStartDate"
                    value={meterData ? meterData.estimationStartDate : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* Add more fields as needed */}
            <div className="mt-2">
              <Button type="submit" variant="primary" className="mx-2">
                Save
              </Button>

              <Button
                variant="danger"
                className="mx-2"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            </div>
            <div className="mt-2">
              <Button
                variant="secondary"
                className="mx-2"
                onClick={togglePlacement}
              >
                Move Window
              </Button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MeterInformation;

// src/components/CustomerInformation.js
import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";

function CustomerInformation({ customerData, setCustomerData, isDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSameAsPremise, setIsSameAsPremise] = useState(true);
  const [isFormSaved, setIsFormSaved] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure setCustomerData is a function before calling it
    if (typeof setCustomerData === "function") {
      setCustomerData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      // Reset the form saved status when inputs change
      setIsFormSaved(false);
    }
  };
  const handleCheckboxChange = () => {
    // Toggle the state of isSameAsPremise
    setIsSameAsPremise((prevValue) => !prevValue);

    // If checked, set mailing address to match premise address
    if (isSameAsPremise) {
      setCustomerData((prevData) => ({
        ...prevData,
        mailingAddress: prevData.premiseAddress || "", // Set to premise address or default to an empty string
      }));
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSave = () => {
    // Check if required fields are filled
    if (
      !customerData.name.trim() ||
      !customerData.accountNumber.trim() ||
      !customerData.premiseAddress.trim()
    ) {
      // Display an alert or handle the validation error as needed
      alert(
        "Please fill in all required fields (Name, Account Number, Premise Address)"
      );
      return;
    }

    // Update the mailing address based on isSameAsPremise
    const updatedCustomerData = {
      ...customerData,
      mailingAddress: isSameAsPremise
        ? customerData.premiseAddress || "" // Set to premise address or default to an empty string
        : customerData.mailingAddress,
    };

    // Add your logic to save the customer information, e.g., send it to an API or update a database
    console.log("Saving customer information:", updatedCustomerData);

    // Update the form saved status
    setIsFormSaved(true);
  };

  const handleClearFields = () => {
    // Clear individual input fields
    setCustomerData((prevData) => ({
      ...prevData,
      name: "",
      accountNumber: "",
      premiseAddress: "",
      mailingAddress: "",
    }));

    // Reset the form saved status
    setIsFormSaved(false);
  };

  const handleClearAll = () => {
    // Clear the entire customer information object
    setCustomerData({
      name: "",
      accountNumber: "",
      premiseAddress: "",
      mailingAddress: "",
    });

    // Reset the form saved status
    setIsFormSaved(false);
  };

  return (
    <div>
      <Card
        className={
          isDarkMode ? "bg-dark text-light my-2" : "bg-light text-dark my-2"
        }
      >
        <Card.Header>
          <Button
            variant="transparent"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-controls="customer-info-collapse"
            aria-expanded={!isCollapsed}
            className={isDarkMode ? "text-light" : "text-dark"} // Dynamically set text color based on isDarkMode
          >
            {isCollapsed ? (
              <>
                Show Customer Information{" "}
                {isFormSaved ? (
                  <span
                    role="img"
                    aria-label="check"
                    style={{ color: "green" }}
                  >
                    ✔️
                  </span>
                ) : (
                  <span role="img" aria-label="cross" style={{ color: "red" }}>
                    ❌
                  </span>
                )}
              </>
            ) : (
              <>
                Hide Customer Information{" "}
                {isFormSaved ? (
                  <span
                    role="img"
                    aria-label="check"
                    style={{ color: "green" }}
                  >
                    ✔️
                  </span>
                ) : (
                  <span role="img" aria-label="cross" style={{ color: "red" }}>
                    ❌
                  </span>
                )}
              </>
            )}
          </Button>
        </Card.Header>
        <Collapse in={!isCollapsed}>
          <Card.Body id="customer-info-collapse">
            <form>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={customerData ? customerData.name : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="accountNumber"
                  className="col-sm-2 col-form-label"
                >
                  Account Number
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="accountNumber"
                    name="accountNumber"
                    value={customerData ? customerData.accountNumber : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="premiseAddress"
                  className="col-sm-2 col-form-label"
                >
                  Premise Address
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="premiseAddress"
                    name="premiseAddress"
                    value={customerData ? customerData.premiseAddress : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                {isSameAsPremise ? (
                  // If checked, hide mailing address input and prefilled with premise address
                  <input
                    type="hidden"
                    id="mailingAddress"
                    name="mailingAddress"
                    value={customerData.premiseAddress}
                  />
                ) : (
                  // If unchecked, show mailing address input and prefilled with current value
                  <div className="mb-3 row">
                    <label
                      htmlFor="mailingAddress"
                      className="col-sm-2 col-form-label"
                    >
                      Mailing Address:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="mailingAddress"
                        name="mailingAddress"
                        value={customerData ? customerData.mailingAddress : ""}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="sameAsPremiseCheckbox"
                  checked={isSameAsPremise}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="sameAsPremiseCheckbox"
                >
                  Same as Premise Address
                </label>
              </div>
              <div className="mt-2">
                <Button variant="primary" className="mx-2" onClick={handleSave}>
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
            </form>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
}

export default CustomerInformation;

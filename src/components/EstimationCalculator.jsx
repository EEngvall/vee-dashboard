// EstimationCalculator.js
import React, { useState } from "react";
import EstimationSegment from "./EstimationSegment";
import { Card, Button, Collapse } from "react-bootstrap";

function EstimationCalculator({ isDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to add a new segment to the list
  const handleAddSegment = () => {};

  // Function to remove a segment from the list based on key
  const handleRemoveSegment = (key) => {};

  // Function to handle calculations based on segmentList
  const handleCalculate = () => {};

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
            aria-controls="estimation-calc-collapse"
            aria-expanded={!isCollapsed}
            className={isDarkMode ? "text-light" : "text-dark"}
          >
            {isCollapsed
              ? "Show Estimation Calculator"
              : "Hide Estimation Calculator"}
          </Button>
        </Card.Header>
        <Collapse in={!isCollapsed}>
          <Card.Body id="estimation-calc-collapse">
            <div>
              {/* Button to add a new EstimationSegment */}
              <Button
                variant="primary"
                className="mx-2"
                onClick={handleAddSegment}
              >
                Add Segment
              </Button>

              {/* Button to trigger calculations */}
              <Button
                variant="success"
                className="mx-2"
                onClick={handleCalculate}
              >
                Calculate
              </Button>
            </div>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
}

export default EstimationCalculator;

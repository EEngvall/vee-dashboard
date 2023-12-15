// EstimationSegment.js
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function EstimationSegment({ onUpdate }) {
  const [segment, setSegment] = useState({
    startDate: "",
    endDate: "",
    avg2020: "",
    avg2021: "",
    avg2022: "",
  });

  const handleInputChange = (e) => {};

  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Label>Estimation Segment Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={segment.startDate}
              onChange={handleInputChange}
            />
          </Col>

          <Col>
            <Form.Label>Estimation Segment End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={segment.endDate}
              onChange={handleInputChange}
            />
          </Col>

          <Col>
            <Form.Label>2020 Avg</Form.Label>
            <Form.Control
              type="number"
              name="avg2020"
              value={segment.avg2020}
              onChange={handleInputChange}
            />
          </Col>

          <Col>
            <Form.Label>2021 Avg</Form.Label>
            <Form.Control
              type="number"
              name="avg2021"
              value={segment.avg2021}
              onChange={handleInputChange}
            />
          </Col>

          <Col>
            <Form.Label>2022 Avg</Form.Label>
            <Form.Control
              type="number"
              name="avg2022"
              value={segment.avg2022}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default EstimationSegment;

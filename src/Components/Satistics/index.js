import React from "react";
import "./index.scss";

import { Row, Col, Space } from "antd";

const Satistics = () => {
  return (
    <>
      <Row gutter={[24, 24]} id="Statistics" align="middle">
        <Col xs={24} md={12}>
          <Row align="middle">
            <Col xs={8} sm={2}>
              <img src="/svg/back.svg" alt="back Icon" />
            </Col>
            <Col xs={8} sm={20} className="Applications">
              Applicants
            </Col>
          </Row>
        </Col>
        <Col xs={0} md={12}>
          <Row justify="end" id="statisticsCount">
            <Col md={4}>
              <h2>25</h2>
              <p>Total</p>
            </Col>
            <Col md={4}>
              <h2>10</h2>
              <p>New</p>
            </Col>
            <Col md={4}>
              <h2>5</h2>
              <p>Viewed</p>
            </Col>
            <Col md={4}>
              <h2>3</h2>
              <p>Appointments</p>
            </Col>
            <Col md={4}>
              <h2>6</h2>
              <p>Others</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Satistics;

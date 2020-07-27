import React from "react";
import "./index.scss";
//Icons
import { Layout, Row, Col, Space } from "antd";
const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <Row>
        <Col xs={24} md={12}>
          <Row justify="center">
            <Col xs={8} sm={2}>
              <img src="/svg/ic-menu_link.svg" alt="menu Icon" />
            </Col>
            <Col xs={8} sm={20}>
              <img src="/logo.png" alt="Company Logo" />
            </Col>
            <Col xs={8} sm={0}>
              <Row justify="end">
                <Col>
                  <img src="/svg/ic-menu_link.svg" alt="menu Icon" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={0} md={12}>
          <Row justify="end">
            <Col sm={10} md={10} lg={7} id="customer_support">
              <img src="/svg/ic-contact_support.svg" alt="Support Icon" />
              <span>Contact Support</span>
            </Col>
            <Col sm={3} md={2}>
              <img src="/svg/active.svg" alt="Active Icon" />
            </Col>
            <Col sm={3} md={2}>
              <img src="/svg/ic-user.svg" alt="menu Icon" />
            </Col>
            <Col sm={3} md={2}>
              <img src="/svg/ic-power_settings_new.svg" alt="menu Icon" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;

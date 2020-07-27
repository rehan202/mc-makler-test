import React from "react";
import Card from "../common/card";
import { Row, Col } from "antd";

const Section = ({ data }) => {
  return (
    <React.Fragment>
      {data.length !== 0 && (
        <React.Fragment>
          <h1>{data[0].status.name}</h1>
          <Row gutter={[24, 24]}>
            {data.map((i, index) => (
              <Col key={index}>
                <Card item={i}></Card>
              </Col>
            ))}
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Section;

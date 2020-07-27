import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

const SearchForm = (props) => {
  let onFinish = (values) => {
    // console.log(values);
  };
  let handleChangeDDL = (value) => {
    props.setDDLValue(value);
  };
  let handleOnPressEnter = (e) => {
    let value = e.target.value;
    if (value === "") {
      props.history.push("/");
    } else {
      props.history.push("/query/" + value);
    }
  };
  return (
    <>
      <Form layout="inline" onFinish={onFinish}>
        <Form.Item>
          <Input
            placeholder="Search for applicant"
            prefix={<SearchOutlined />}
            name="query"
            onPressEnter={handleOnPressEnter}
            initialValue={props.searchValue || ""}
          />
        </Form.Item>

        <Select
          defaultValue="bids"
          style={{
            width: 80,
            margin: "0 8px",
          }}
        >
          <Option value="bids">BIDS</Option>
        </Select>
        <Select
          style={{ minWidth: "150px" }}
          defaultValue={props.ddValue}
          onChange={handleChangeDDL}
        >
          <Option value="status">STATUS</Option>
          <Option value="appointment">Appointment Set</Option>
          <Option value="property">Property Viewed</Option>
          <Option value="interested">Interested</Option>
          <Option value="offer">Offer Accepted</Option>
        </Select>
      </Form>
    </>
  );
};

export default SearchForm;

import React, { useEffect, useState } from "react";
import "./index.scss";

//Components
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Statistics from "../../Components/Satistics";
import SearchForm from "../../Components/SearchForm";
import Section from "../../Components/Section";

//Sevices
import http from "../../services/httpService";

import { Layout, Row, Col } from "antd";
const { Content } = Layout;

const SearchPage = (props) => {
  const [dropDown, setDropDown] = useState("status");
  const [appointment, setAppointment] = useState([]);
  const [property, setProperty] = useState([]);
  const [interested, setInterested] = useState([]);
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    http.get("/Data.json").then(({ data }) => {
      setAppointment(data.filter((i) => i.status.id === 1));
      setProperty(data.filter((i) => i.status.id === 2));
      setInterested(data.filter((i) => i.status.id === 3));
      setOffer(data.filter((i) => i.status.id === 4));
    });
  }, []);
  return (
    <>
      <Layout id="maklerLayout">
        <Header />
        <Content>
          <Statistics />
          <Row gutter={[24, 24]}>
            <Col>
              <SearchForm
                history={props.history}
                ddValue={dropDown}
                setDDLValue={setDropDown}
              />
            </Col>
          </Row>
          {dropDown === "status" || dropDown === "appointment" ? (
            <Section data={appointment} />
          ) : (
            ""
          )}

          {dropDown === "status" || dropDown === "property" ? (
            <Section data={property} />
          ) : (
            ""
          )}

          {dropDown === "status" || dropDown === "interested" ? (
            <Section data={interested} />
          ) : (
            ""
          )}

          {dropDown === "status" || dropDown === "offer" ? (
            <Section data={offer} />
          ) : (
            ""
          )}
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default SearchPage;

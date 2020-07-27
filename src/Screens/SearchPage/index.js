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
  const [searchValue, setSearchValue] = useState("");
  const [appointment, setAppointment] = useState([]);
  const [property, setProperty] = useState([]);
  const [interested, setInterested] = useState([]);
  const [offer, setOffer] = useState([]);

  let q = props.match.params.query;

  useEffect(() => {
    http.get("/Data.json").then(({ data }) => {
      if (data !== undefined) {
        let d = data.filter((m) => search(m, q));
        // console.log(d);
        setAppointment(d.filter((i) => i.status.id === 1));
        setProperty(d.filter((i) => i.status.id === 2));
        setInterested(d.filter((i) => i.status.id === 3));
        setOffer(d.filter((i) => i.status.id === 4));
      }
    });
    setSearchValue(q);
  }, [q]);

  let search = (object, query) => {
    let result =
      object.firstName.toLowerCase().includes(query.toLowerCase()) ||
      object.lastName.toLowerCase().includes(query.toLowerCase()) ||
      object.email.toLowerCase().includes(query.toLowerCase());
    return result;
  };
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
                searchValue={searchValue}
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

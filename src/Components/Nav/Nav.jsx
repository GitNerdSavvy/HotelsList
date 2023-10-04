import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Container>
      <Row className="m-20  ">
        <Col className="d-flex flex-row justify-content-around">
          <Link to="/NewY" className="btn btn-primary bot">
            New York
          </Link>
          <Link to="/Mumbai" className="btn btn-primary bot">
            Mumbai
          </Link>
          <Link to="/Paris" className="btn btn-primary bot">
            Paris
          </Link>
          <Link to="/London" className="btn btn-primary bot">
            London
          </Link>
        </Col>
        <Col className="d-flex flex-column align-items-end">
          <Link to="/more">
            <button className="btn btn-primary">Show More</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;

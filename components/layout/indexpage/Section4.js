import React from "react";

import { Button, Row, Col } from "react-bootstrap";

const Section_4 = () => {
  return (
    <section className="about add_before">
      <div className="container">
        <div className="about-us-section">
          <Row style={{ marginTop: 50 }}>
            <Col md={6}>
              <div style={{ top: 0 }}>
                <img src={"de.png"} className="img-shadow img-fluid" />
              </div>
              <div className=""></div>
            </Col>
            <Col md={6} style={{ marginTop: 30 }}>
              <p style={{ color: "red", fontSize: 22, fontWeight: "600" }}>
              </p>
              <h2 style={{ color: "white" }}>
              OUR EFFORTS YOUR VISION
              </h2>
              <p className="mt-4" style={{ color: "white" }}>
                Our approach is to work with impeccable plans and provide the
                requested product with a quick turnaround time to ensure our
                customer satisfaction and not only quick turnaround is our prime
                focus, we also make sure to provide uniqueness in the product
                while considering the needs of the industry, Moreover we also
                keep our customers looped in throughout the process of the
                project. Our clients are getting their desired products in less
                amount as compared to the market.
              </p>
              <div className="text-center mt-5">
                <div className=""></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Section_4;

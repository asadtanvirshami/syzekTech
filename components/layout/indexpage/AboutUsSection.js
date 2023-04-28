/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

import { Button, Row, Col } from "react-bootstrap";

export const AboutUsSection = () => {
  return (
    <section className="about add_before">
      <div className="container">
        <div className="about-us-section">
          <Row style={{ marginTop: 50 }}>
            <Col md={6} style={{ marginTop: 30 }}>
              <h2 style={{ color: "white" }}></h2>
              <p className="mt-4" style={{ color: "white" }}>
                Syzek Tech is the fastest leading IT Solutions and Marketing
                Agency based in Australia, New South Wales providing services
                globally. Here at Digious Solutions, we make sure to provide the
                best of our services for any kind of field. Our talented team of
                graphic designers, website developers, Marketing specialists,
                Software developers, game developers, and debuggers keep track
                of modern codes and techniques to meet market requirements. We
                not only provide the best services, but we also make sure our
                customers are treated professionally and are satisfied with what
                they receive because their satisfaction is our priority
                throughout the time they are connected with us.
              </p>
              <div className="text-center mt-5">
                <div className="">
                  <Link href="/contact">
                    <Button className="btn-lg mx-1 mb-5">Start Project</Button>
                  </Link>{" "}
                  <Link href="/services">
                    <Button className="btn-lg mx-1 mb-5">Industries </Button>
                  </Link>{" "}
                </div>
              </div>
            </Col>
            <Col md={6} className="text-center mt-5">
              <div style={{ justifyContent: "center" }}>
                <p className="mt-4" style={{ color: "white" }}>
                  Our vision is to become the leading Marketing agency and to
                  provide the best of our solutions globally. We believe that
                  our growth is not self-dependent, our team plays a very
                  important role in this development and we make sure to give
                  our best not only to our customers but to all of our staff as
                  well. At every step of Digious’s growth, its employee’s growth
                  is also compulsory. We strictly believe in deserving nature
                  and give every employee a chance to prove their abilities at
                  each stage of our hierarchy.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

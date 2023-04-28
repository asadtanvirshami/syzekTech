/* eslint-disable react/no-unescaped-entities */
import React from "react";

import AboutUsSection from "./AboutUsSection";
import Section_4 from "./Section4";
import PricingSection from "./PricingSection/PricingSection";
import Slider from "../indexpage/Slider";
import Count from "./Count";
import ContactForm from "../../shared/ContactForm";

export const Index = () => {
  return (
    <>
      <div className="section_1">
        <section className="section-div">
          <div className="hero-container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="content">
                  <h1 className="Title">
                    <i className="">
                      {" "}
                      <h1 className="headline" style={{fontSize:99, fontWeight:'600', color:"black"}}>SYZEK TECH</h1>
                    </i>
                  </h1>
                  <h1 className="headline">
                    <strong>
                      "WE CARE ABOUT OUR CUSTOMERS"
                    </strong>
                  </h1>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 content-div">
                <div className="content">
                  <h1 className="headline">
                    <strong>Syzek Tech is the fastest leading IT Solutions and
                    Marketing Agency</strong>
                  </h1>
                  {/* <div className="m-auto mt-5">
                    <img src={"home-tag.png"}/>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginBottom: 150 }}></div>
      <Section_4/>
      <div style={{ marginTop: 160 }}></div>
      <AboutUsSection />
      <div style={{ marginBottom: 10 }}>
        <Count />
      </div>
      <PricingSection />
      <div style={{ marginTop: 100 }}></div>
      <ContactForm />
      <div style={{ marginTop: 130 }}></div>
    </>
  );
};

export default Index;

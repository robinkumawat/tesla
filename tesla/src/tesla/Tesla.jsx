import React from "react";
import Header from "./Header";
import Section from "./Section";
import './tesla.css'
// import model3 from "./tesla/images/model-3.jpg"
import modelx from "./images/model-x.jpg"
import models from "./images/model-s.jpg"
import modely from "./images/model-y.jpg"
import solarroof from "./images/solar-roof.jpg"
import solarpanel from "./images/solar-panel.jpg"
import accessories from "./images/accessories.jpg"
import image from "./tesla/tesla/src/tesla/images/model-s.jpg"
// Component Composition

function Tesla() {
  return (
    <>
      <Header />
      <Section 
        name="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo = {image}
     shaitan = {true}
     
     />

      <Section 
        name="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo = {models}
></Section>
      <Section 
        name="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo = {modelx}
        
        />
      <Section 
        name="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo = {modely}
        />
      <Section 
        name="Solar Panel"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo = {solarpanel}
        
        />
      <Section 
        name="Solar Roof"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo = {solarroof}
        />
      <Section 
        name="Accessories"
    
        leftBtn="Custom Order"
        photo = {accessories}

        />
    </>
  );
}

export default Tesla;
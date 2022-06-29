import React from "react";
import "./Skills.css";
import Product from "../Product/Product";
import bottle from "../../Images/bottle.png";
import greeting from "../../Images/greeting.png";
import photoframe from "../../Images/photoframe.png";

function Skills() {
  return (
    <>
      <div className="skill-row">
        <Product
          id="1"
          title="LED-Bottle"
          description="Without throwing your favourite empty glass bottles 🍾, design them beautifully with us and decorate your shelf"
          price={500}
          image={bottle}
        />
      </div>
      <div className="skill-row">
        <Product
          id="2"
          title="Giant Heart Shaped Greeting"
          description="Greet your loved ones with this fabulous handmade DIY craft greeting"
          price={800}
          image={greeting}
        />
        <Product
          id="3"
          title="Quilling Paper Photo Frame"
          description="Creative concept made with pure love and art soul; to decorate your house."
          price={200}
          image={photoframe}
        />
      </div>
    </>
  );
}
export default Skills;

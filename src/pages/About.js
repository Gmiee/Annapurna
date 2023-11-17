import React from "react";
import join from "../Assets/join.png";
import food from "../Assets/food.png";
import serve from "../Assets/serve.png";
import walk from "../Assets/walkinh.png";
const About = () => {
  return (
    <>
      <main>
        <section className="container1">
          <div className="section1">
            <img src={food} alt="food" />
            <p>Pack your food you want to donate</p>
          </div>
        </section>

        <section className="container1">
          <div className="section1">
            <p>Come to us or we'll come to collect</p>
            <img src={walk} alt="food" />
          </div>
        </section>

        <section className="container1">
          <div className="section1">
            <img src={serve} alt="food" />
            <p>We will donate food</p>
          </div>
        </section>

        <section className="container1">
          <div className="section1">
            <p>If you only want to come for
               sewa,surely you can come.</p>
            <img src={join} alt="food" />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

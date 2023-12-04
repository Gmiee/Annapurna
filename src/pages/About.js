import React from "react";
import join from "../Assets/join.png";
import food from "../Assets/food.png";
import serve from "../Assets/serve.png";
import walk from "../Assets/walkinh.png";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <main>
        <h2 className="abt">What we do!</h2>
        <section className="container1">
          <div className="section1">
            <img src={food} alt="food" />
            <p>Pack your food you want to donate</p>
          </div>
        </section>

        <section className="container1">
          <div className="section1">
            <p>Come to us or we will be delighted to collect it from you``</p>
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
            <p>
              If you only want to come for service, you are most welcome to
              come. Help us fill tables with hope! Join our campaign and let's
              make a difference in someone's life.
            </p>
            <img src={join} alt="food" />
          </div>
          <div className="centerButton">
              <Nav.Link as={Link} to={"/Contactus"}>
                <button style={{ fontSize: '20px', background:'blue', color:'white' , padding:'10px', borderRadius:'10px' }} className="btn01">Contact Us</button>
              </Nav.Link>
            </div>
        </section>
      </main>
    </>
  );
};

export default About;

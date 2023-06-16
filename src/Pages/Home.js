import React from "react";
import "./Home.css";
import profileimg from "../assets/img/profileimg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="helth icon"
                className="img-fluid"
              />
               <div className="bgblack" data-aos="fade-right"></div>
              </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Welcome</h1>
              <h2>Please select your age group</h2>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                <Link to="/teen">
                    <button type="button" className="btn btn-primary">
                    Start
                    </button>
                </Link>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "/about";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1"
        style={{ color: "black" }}
        >About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <Typography style={{ color: "black" }}>Varun Bohara</Typography>
            
            <span style={{ color: "black" }}>
              OnlineStore is a development project built using MERN STACK.
            </span>
          </div>
          {/* <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

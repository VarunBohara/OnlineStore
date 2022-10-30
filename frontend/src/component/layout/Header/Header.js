import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/l.png";

const options = {
  burgerColorHover: "rgb(214, 214, 214)",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "50px",
  logoHoverColor: "white",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "rgb(214, 214, 214)",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "rgb(214, 214, 214)",
  searchIconColorHover: "rgb(214, 214, 214)",
  cartIconColorHover: "rgb(214, 214, 214)",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

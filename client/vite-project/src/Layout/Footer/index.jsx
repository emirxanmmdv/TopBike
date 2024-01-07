import React from "react";
import "./index.scss";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footerSection">
      <div className="topFooter">
        <div className="container">
          <div className="footerContents">
            <div className="logoSection">
              <div className="siteLogo">
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" />
              </div>
              <div className="slogan">
                <p>
                  The simple, delicate and light design
                  <br />
                  makes it comfortable for everyone.
                </p>
              </div>
              <div className="socialMedia">
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
            <div className="shopSection">
              <div className="shopTitle">
                <h4>Shop</h4>
              </div>
              <div className="line">____</div>
              <div className="shopLinks">
                <ul>
                  <li>
                    <NavLink to={"/products"}>Shopping</NavLink>
                    <NavLink to={"/bicycle"}>Bicycle</NavLink>
                    <NavLink to={"/bike-accessories"}>
                      Bicycle Accessory
                    </NavLink>
                    <NavLink to={"/helmet"}>Helmet</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aboutUsSection">
              <div className="aboutUsTitle">
                <h4>About Us</h4>
              </div>
              <div className="line">____</div>
              <div className="aboutUsLinks">
                <ul>
                  <li>
                    <NavLink to={"/"}>About Us</NavLink>
                    <NavLink to={"/"}>Pagination</NavLink>
                    <NavLink to={"/"}>Terms & Conditions</NavLink>
                    <NavLink to={"/"}>Contact</NavLink>
                    <NavLink to={"/"}>Accessories</NavLink>
                    <NavLink to={"/"}>Terms of use</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="informationSection">
              <div className="informationTitle">
                <h4>Information</h4>
              </div>
              <div className="line">____</div>
              <div className="informationLinks">
                <ul>
                  <li>
                    <NavLink to={"/"}>Address</NavLink>
                    <NavLink to={"/"}>Privacy Policy</NavLink>
                    <NavLink to={"/"}>Terms & Conditions</NavLink>
                    <NavLink to={"/"}>Product Return</NavLink>
                    <NavLink to={"/"}>Wholesale Policy</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="container">
          <div className="bottomContents">
            <div className="textContent">
              <p>
                © Copyright 2020 |<Link to={"/"}> TopBike </Link>
                By
                <Link to={"https://engotheme.com"} className="engo">
                  {" "}
                  EngoTheme.{" "}
                </Link>
                <Link
                  to={"https://www.shopify.com/free-trial?ref=shopifycenter"}
                >
                  Powered by Shopify.
                </Link>
              </p>
            </div>
            <div className="digitalCards">
              <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1613576066"></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import "./index.scss"
import { NavLink } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <nav id="navbarSection">
      <div className="container">
        <div className="navbarContents">
          <div className="siteLogo">
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289" />
          </div>
          <div className="subBars">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/featured"}>Featured</NavLink>
              </li>
              <li>
                <NavLink to={"/pages"}>Pages</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
            </ul>
          </div>
          <div className="navIcons">
            <ul>
              <li>
                <CiSearch />
              </li>
              <li>
                <CiUser />
              </li>
              <li>
                <CiHeart />
              </li>
              <li>
                <MdOutlineShoppingBag />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
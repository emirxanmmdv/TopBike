import React from "react";
import "./index.scss";
import Navbar from "../Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
// import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <div className="slider">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="firstImg">
              <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_4.jpg?v=1613575294" />
              <div className="contentBox">
                <h2 className="bigTxt">Off Road Bicycle</h2>
                <h4 className="smallTxt">
                  Here to bring your life style to the next level.
                </h4>
                <Link to={"/products"} className="shopNowBtn">
                  Shop now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="secondImg">
              <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_3.jpg?v=1613575289" />
              <div className="contentBox">
              <h2 className="bigTxt">Sport Bicycle</h2>
                <h4 className="smallTxt">
                Accompany you to the end of the road
                </h4>
                <Link to={"/products"} className="buyNowBtn">
                  Buy now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Navbar /> */}
    </>
  );
};

export default Slider;

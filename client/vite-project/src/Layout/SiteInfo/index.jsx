import React from "react";
import "./index.scss";

const SiteInfo = () => {
  return (
    <section id="siteInfo">
      <div className="container">
        <div className="cards">
          <div className="shippingCard">
            <div className="cardIcon">
              <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/free-delivery.png?v=1613577961" />
            </div>
            <h4 className="mainTxt">free shipping</h4>
            <div className="subText">Only order from $230</div>
          </div>
          <div className="returnCard">
            <div className="cardIcon">
              <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/return-of-investment.png?v=1613577961" />
            </div>
            <h4 className="mainTxt">money return</h4>
            <div className="subText">30 days free for return money</div>
          </div>
          <div className="supportCard">
            <div className="cardIcon">
              <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/24-hours-support.png?v=1613577961" />
            </div>
            <h4 className="mainTxt">support 24/7</h4>
            <div className="subText">Always ready to support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteInfo;

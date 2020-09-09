import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="123000"
            title="The Lean Startup"
            price={29.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZYmfFbZTFAbu-SEFRB0w_Mi4-tSUsY80u6g&usqp=CAU"
          />
          <Product
            id="123001"
            title="adidas Men's Ultraboost 20 Sneaker"
            price={53.92}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61biysA%2B61L._AC_UY535_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123002"
            title="Fjallraven, Kanken Classic Backpack for Everyday"
            price={74.8}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_UX679_.jpg"
          />
          <Product
            id="123003"
            title="Blendtec Total Classic Original Blender"
            price={255.12}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg"
          />
          <Product
            id="123004"
            title="Apple EarPods with Lightning Connector - White"
            price={17.5}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41wYbyr3LLL._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123005"
            title="Apple TV Siri Remote"
            price={52.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41PlN%2BkavJL._AC_SY445_.jpg"
          />
          <Product
            id="123005"
            title="VIZIO D-Series 40” Class Smart TV - D40f-G9"
            price={102.22}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61i-Ovlpk1L._AC_SX425_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

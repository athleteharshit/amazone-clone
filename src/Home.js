import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* product  */}
      <div className="home__row">
        <Product
          id={123}
          title="Learning React: Functional Web Development with React and Redux"
          image="https://m.media-amazon.com/images/I/91gJrDrQuCL._AC_UY327_FMwebp_QL65_.jpg"
          price={`925`}
          rating={5}
        />

        <Product
          id={124}
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY327_FMwebp_QL65_.jpg"
          price={`1,84,990`}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={125}
          title="Apple iPhone 11 (64GB) - Black"
          image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY327_FMwebp_QL65_.jpg"
          price={`62,900`}
          rating={5}
        />

        <Product
          id={126}
          title="CURIOUS LIFESTYLE Graphic Printed T Shirt for Men | Men t-Shirt Cotton Half Sleeve x"
          image="https://m.media-amazon.com/images/I/619GtcwURIL._AC_UL480_FMwebp_QL65_.jpg"
          price={`450`}
          rating={3}
        />

        <Product
          id={127}
          title="Intel Corporation Core i5 9400F 9th Generation Desktop Processor 6 Cores up to 4.1 GHz Turbo Without Graphics"
          image="https://m.media-amazon.com/images/I/71709S6VMTL._AC_UY327_FMwebp_QL65_.jpg"
          price={`13,390`}
          rating={4}
        />
      </div>

      <div className="home__row">
      <Product
          id={123}
          title="Acer RT240Y 23.8'' Full HD ZeroFrame IPS LED Monitor - (HDMI, VGA & DVI Ports) Stereo Speakers with Eye Care "
          image="https://m.media-amazon.com/images/I/61URFimkdKL._AC_UY327_FMwebp_QL65_.jpg"
          price={`9,999`}
          rating={2}
        />
      </div>
    </div>
  );
}

export default Home;

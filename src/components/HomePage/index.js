import React from "react";

//Components
import Slider from "./components/Slider";
import Promo from "./components/Promo";
import Banner from "./components/Banner";
import FoodTab from "./components/FoodTabs";
import HomeBanner from "./components/HomeBanner2";
import SectionInfo from "./components/SectionInfo";
import HomeTestimonials from "./components/HomeTestimonisals";
import ShortCode from "./components/ShortCode";
import HomeCounter from "./components/HomeCounter";
import BlogPost from "./components/BlogPost";
import ServiceC from "./components/ServiceC";

function index() {
  return (
    <div>
      <Slider />
      <Promo />
      <Banner />
      <FoodTab />
      <HomeBanner />
      <SectionInfo />
      <HomeTestimonials />
      <ShortCode />
      <HomeCounter />
      <BlogPost />
      <ServiceC />
    </div>
  );
}

export default index;

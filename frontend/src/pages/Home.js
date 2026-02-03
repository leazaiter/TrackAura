import React from "react";
import Homehero from "../pages/HomeHero";
import Aboutus from "../pages/Aboutus";
import Whycreateanaccount from "../pages/Whycreateanaccount";
import Reviews from "../pages/Reviews";
import Footer from "../pages/Footer";

function Home(){
  return(
    <div>
      <Homehero />
      <Aboutus />
      <Whycreateanaccount />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home;
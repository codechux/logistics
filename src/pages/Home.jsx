import React from "react";
import Preheader from "../components/pre-header.jsx";
import Header from "../components/header.jsx";
import Hero from "../components/hero.jsx";
import Track from "../components/track.jsx";
import Services from "../components/services.jsx";
import Section1 from "../components/Section1.jsx";
import Section2 from "../components/Section2.jsx";
import Testimonial from "../components/testimonial.jsx";
import Footer from "../components/footer.jsx";
import Contact from "../components/contact.jsx";
import PostFooter from "../components/postfooter.jsx";

const Home = () => {
  return (
    <>
      <Preheader />
      <Header />
      <Hero />
      <Track />
      <Services />
      <Section1 />
      <Section2 />
      <Testimonial />
      <Contact />
      <Footer />
      <PostFooter />
    </>
  );
};

export default Home;

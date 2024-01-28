import React from "react";
import Preheader from "../components/pre-header";
import Header from "../components/header";
import Footer from "../components/footer";
import PostFooter from "../components/postfooter";
import WaybillQuery from "../components/Query";

const TrackPage = () => {
  return (
    <div>
      <Preheader />
      <Header />
      <WaybillQuery />
      <Footer />
      <PostFooter />
    </div>
  );
};

export default TrackPage;

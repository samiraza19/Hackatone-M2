import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/Footer";
import Introduction from "../components/Introduction";
// import { Navbar } from "../components/Navbar";

export const Home = () => {
  return <>
   <h1 >Welcome to Red Proud Blood Bank</h1>
   <Carousel />
   <Introduction />
   <Footer />
  </>;
};

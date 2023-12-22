import { useEffect } from "react";
import Banner from "./Banner";
import Customers from "./Customers";
import Members from "./Members";
import Users from "./Users";
import WhyUse from "./WhyUse";
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div data-aos="fade-up"> <Banner /> </div>
      <div data-aos="fade-up">  <WhyUse /> </div>
      <div data-aos="fade-up">  <Users /> </div>
      <div data-aos="fade-up">  <Customers /> </div>
      <div data-aos="fade-up">  <Members /> </div>
    </div>
  );
};

export default Home;

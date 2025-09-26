import React from "react";
import Header from "../../components/header/Header";
import Schedule from "../../components/schedule/Schedule";
import Countdown from "../../components/countdown/Countdown";
import Registry from "../../components/header/Registry";
import Counter from "../../components/countdown/Counter";

const Home = () => {
  return (
    <div>
      <Header />
      <Schedule />
      <Location />
      <Counter />
      {/* <Countdown /> */}
      <Registry />
    </div>
  );
};

export default Home;

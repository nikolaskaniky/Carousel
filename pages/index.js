import React from "react";
import Carousel from "../components/Carousel";
import classes from "../styles/home-page.module.scss";
import Image from "next/image";
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.jpg";
import cover3 from "../images/cover3.jpg";
import cover4 from "../images/cover4.png";

const HomePage = () => {
  const arr = [];

  return (
    <div className={classes["home-page"]}>
      <Carousel
        array={[
          { image: cover1 },
          { image: cover2 },
          { image: cover3 },
          { image: cover4 },
        ]}
        isLooping={true}
        arrows
      ></Carousel>
    </div>
  );
};

export default HomePage;

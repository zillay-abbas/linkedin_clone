import React from "react";

import { BsEyeFill } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProjectPost from "./ProjectPost/ProjectPost";

import "./ProjectDetail.css";

const PersonStat = () => {
  const moveForward = () => {};

  const movePrevious = () => {};

  return (
    <div className="project_cont">
      <div className="proj_head">
        <h3>Projects Completed</h3>
        <h5 className="proj_privacy">
          {" "}
          <BsEyeFill className="mx_1" /> Only you can see
        </h5>
      </div>

      <div className="slider_view">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default PersonStat;

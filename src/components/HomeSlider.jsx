import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "./homeSlider.css";
import "swiper/css/navigation";
import { EffectFade } from "swiper/modules";
import slide1 from "../assets/Images/slide1.jpg";
import slide2 from "../assets/Images/slide2.jpg";
import slide3 from "../assets/Images/slide3.jpg";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function HomeSlider() {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#36454f",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        className="slider"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
      >
        <SwiperSlide>
          <div className="slide1">
            <div className="left">
              <div className="content">
                <h2>Slider 1</h2>
                <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate soluta voluptatum enim aut! Itaque, culpa odio
                  laborum ducimus impedit voluptas accusamus odit tempore
                  aspernatur.
                </h5>
              </div>
            </div>
            <div className="right">
              <img src={slide1} alt="Not availble" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <div className="left">
              <div className="content">
                <h2>Slider 2</h2>
                <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate soluta voluptatum enim aut! Itaque, culpa odio
                  laborum ducimus impedit voluptas accusamus odit tempore
                  aspernatur.
                </h5>
              </div>
            </div>
            <div className="right">
              <img src={slide2} alt="Not availble" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3">
            <div className="left">
              <div className="content">
                <h2>Slider 3</h2>
                <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate soluta voluptatum enim aut! Itaque, culpa odio
                  laborum ducimus impedit voluptas accusamus odit tempore
                  aspernatur.
                </h5>
              </div>
            </div>
            <div className="right">
              <img src={slide3} alt="Not availble" />
            </div>
          </div>
        </SwiperSlide>
        <div className="button-next-slide">
          <GrLinkNext />
        </div>
        <div className="button-prev-slide">
          <GrLinkPrevious />
        </div>
      </Swiper>
    </div>
  );
}

export default HomeSlider;

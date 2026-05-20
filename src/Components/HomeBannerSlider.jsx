"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerImage1 from "@/images/banner-image1.png";
import bannerImage2 from "@/images/banner-image2.png";
import bannerImage3 from "@/images/banner-image3.png";

export default function HomeBannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      title: "Turn Your Startup Idea Into Reality",
      desc: "Share your ideas, validate them with real users, and build something impactful with community feedback.",
      cta: "Explore Ideas",
      image: bannerImage1,
    },
    {
      title: "Discover Innovative Startup Ideas",
      desc: "Explore trending ideas from creators worldwide and get inspired to build your next big product.",
      cta: "Browse Ideas",
      image: bannerImage2,
    },
    {
      title: "Validate Ideas Faster With Community",
      desc: "Get real comments, suggestions, and improve your startup idea before launching it to the world.",
      cta: "Start Now",
      image: bannerImage3,
    },
  ];

  return (
    <section className="bg-[#0b1120] px-4 py-16 md:px-8">
      <div className="animate__animated animate__backInRight">
        <Slider {...settings}>
          {slides.map((item, index) => (
            <div key={index}>
              <div
                className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16 text-white h-[500px]"
                style={{
                  backgroundImage: `url(${item.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-2xl  bottom-[-150]">
                  <h1 className="text-3xl font-black leading-tight md:text-5xl  animate__animated animate__backInDown ">
                    {item.title}
                  </h1>

                  <p className="mt-5 text-sm text-white/80 md:text-base animate__animated animate__backInLeft">
                    {item.desc}
                  </p>

                  <button className="mt-6 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition animate__animated animate__backInUp">
                    {item.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

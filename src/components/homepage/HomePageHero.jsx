"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export const slideData = [
  {
    title: "Turn Ideas Into Real Startups",
    description:
      "Transform your raw ideas into fully developed, scalable startup opportunities by going through a process of validation, prototyping, and strategic growth. Learn how to shape your concepts into real businesses that solve meaningful problems, attract users, and have the potential to grow into successful ventures.",
    cta: "Start Now",
    image: "https://i.ibb.co.com/Cp2p9S2n/ai-startup.png",
    badge: "Startup Building Guide",
    href: "/start",
  },
  {
    title: "AI Startup Revolution",
    description:
      "Discover how artificial intelligence is transforming the global startup ecosystem by enabling founders to build smarter, faster, and more scalable products. From generative AI and intelligent automation to data-driven decision-making systems, explore how the next generation of startups is being powered by cutting-edge technologies that are reshaping industries and creating entirely new business opportunities.",
    cta: "Explore AI Ideas",
    image: "https://i.ibb.co.com/N2bBpX7N/growth.png",
    badge: "AI & Innovation Trends",
    href: "/ideas/ai",
  },
  {
    title: "Build. Validate. Launch.",
    description:
      "Turn your ideas into reality by sharing them with a community of creators, developers, and entrepreneurs who provide real, actionable feedback. Validate your concepts early, refine your product direction, and improve your startup idea before launch to increase your chances of building something truly impactful and successful in the market.",
    cta: "Share Your Idea",
    image: "https://i.ibb.co.com/SDbsWHsF/build.png",
    badge: "Idea Validation Workflow",
    href: "/ideas/create",
  },
  {
    title: "Join a Global Founder Network",
    description:
      "Become part of a powerful global network of innovators, developers, startup founders, and creative thinkers who are building the future together. Collaborate on ideas, exchange insights, and connect with people worldwide to grow your skills, find opportunities, and turn ambitious ideas into real-world ventures.",
    cta: "Join Community",
    image: "https://i.ibb.co.com/fzZsDpqV/network.png",
    badge: "Global Collaboration Hub",
    href: "/community",
  },
];
const HomePageHero = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slideData, ind) => (
          <SwiperSlide key={ind}>
            <Slide slideData={slideData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageHero;

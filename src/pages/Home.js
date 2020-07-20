import React, { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import Banner from "../components/Banner/Banner";
import CoursesCarousel from "../components/CoursesCarousel/CoursesCarousel";
import StudentViewingCarousel from "../components/StudentViewingCarousel/StudentViewingCarousel";
import Recommentdations from "../components/Recommentdations/Recommentdations";
import TopCategories from "../components/TopCategories/TopCategories";
import Companies from "../components/Companies/Companies";
import CommentCarousel from "../components/CommentCarousel/CommentCarousel";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Banner />
      <CoursesCarousel />
      <StudentViewingCarousel />
      <Recommentdations />
      <TopCategories />
      <CommentCarousel />
      <Companies />
    </Fragment>
  );
}

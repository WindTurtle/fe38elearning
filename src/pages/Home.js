import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import Banner from "../components/Banner/Banner";
import CoursesCarousel from "../components/CoursesCarousel/CoursesCarousel";
import { coursesServices } from "../services/CoursesServices";
import StudentViewingCarousel from "../components/StudentViewingCarousel/StudentViewingCarousel";
import Recommentdations from "../components/Recommentdations/Recommentdations";
import TopCategories from "../components/TopCategories/TopCategories";
import Companies from "../components/Companies/Companies";
import CommentCarousel from "../components/CommentCarousel/CommentCarousel";

export default function Home() {
  let [courseCategories, setCourseCategories] = useState([]);
  let [course, setCourse] = useState([]);
  useEffect(() => {
    coursesServices
      .getCourseCategories()
      .then((res) => {
        setCourseCategories(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    coursesServices
      .getCourse()
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Fragment>
      <Carousel />
      <Banner />
      <CoursesCarousel courseCategories={courseCategories} course={course} />
      <StudentViewingCarousel />
      <Recommentdations />
      <TopCategories courseCategories={courseCategories} />
      <CommentCarousel />
      <Companies />
    </Fragment>
  );
}

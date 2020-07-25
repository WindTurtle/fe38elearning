import React, { useState, useEffect, Fragment } from "react";
import "./FormFilterCourse.scss";
import { coursesServices } from "../../services/CoursesServices";
import TableFormFilterCourse from "../TableFormFilterCourse/TableFormFilterCourse";
export default function FormFilterCourse() {
  let [courseCategories, setCourseCategories] = useState([]);
  let [course, setCourse] = useState([]);
  let [getCategoryId, setCategoryId] = useState();
  let [getCourseId, setCourseId] = useState({
    maKhoaHoc: "",
  });
  let [userInCourse, setUserInCourse] = useState([]);
  const handleInput = (event) => {
    let categoryId = event.target.value;
    setCategoryId(categoryId);
  };
  const handleInputCourseId = (event) => {
    let courseId = event.target.value;
    setCourseId({ maKhoaHoc: courseId });
  };
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
  const renderCourseCategories = () => {
    return courseCategories.map((item, index) => {
      return (
        <option value={item.maDanhMuc} key={index}>
          {item.tenDanhMuc}
        </option>
      );
    });
  };
  const renderCourse = () => {
    return course.map((item, index) => {
      if (item.danhMucKhoaHoc.maDanhMucKhoahoc === getCategoryId) {
        return (
          <option value={item.maKhoaHoc} key={index}>
            {item.tenKhoaHoc}
          </option>
        );
      } else {
        return null;
      }
    });
  };
  useEffect(() => {
    coursesServices
      .getUserInCourse(getCourseId)
      .then((res) => {
        setUserInCourse(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [getCourseId]);

  const [searchTerm, setSearchTerm] = useState("");
  const [listUser, setListUser] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = userInCourse.filter((user) => {
      return user.taiKhoan.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setListUser(results);
  }, [searchTerm, userInCourse]);
  return (
    <Fragment>
      <div className="picking-course-content">
        <form className="search-container mb-2">
          <input
            type="text"
            id="search-bar"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search User..."
          />
        </form>
        <form className="picking-form">
          <div className="row">
            <div className="col-6">
              <div className="form-group-item">
                <label>Course Categories:</label>
                <select
                  style={{ width: "300px" }}
                  id="course-categories"
                  onChange={handleInput}
                >
                  <option value="#">--Select Course Categories--</option>
                  {renderCourseCategories()}
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group-item">
                <label>Courses:</label>
                <select
                  style={{ width: "300px" }}
                  id="course"
                  onChange={handleInputCourseId}
                >
                  <option value="#">--Select Course--</option>
                  {renderCourse()}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <TableFormFilterCourse
        listUser={listUser}
        courseId={getCourseId.maKhoaHoc}
      />
    </Fragment>
  );
}

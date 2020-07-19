import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../pages/Home";
import { HomeTemplate } from "../templates/HomeTemplate";
import DetailCourse from "../pages/DetailCourse";
import AccountForm from "../pages/AccountForm";
import Profile from "../pages/Profile";
import ListCoursesRegistered from "../pages/ListCoursesRegistered";
import { ProfileTemplate } from "../templates/ProfileTemplate";
import InfoUser from "../pages/InfoUser";
import { AdminTemplate } from "../templates/AdminTemplate";
import AdminDashBoard from "../components/AdminDashBoard/AdminDashBoard";
import AdminUser from "../pages/AdminUser";
import AdminCourse from "../pages/AdminCourse";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate
            exact
            path="/detail-course/:makhoahoc"
            Component={DetailCourse}
          />
          <HomeTemplate exact path="/login" Component={AccountForm} />
          <HomeTemplate exact path="/edit-profile" Component={Profile} />
          <ProfileTemplate exact path="/user-info" Component={InfoUser} />
          <ProfileTemplate
            exact
            path="/list-courses-registered"
            Component={ListCoursesRegistered}
          />
          <AdminTemplate exact path="/admin" Component={AdminDashBoard} />
          <AdminTemplate exact path="/user-management" Component={AdminUser} />
          <AdminTemplate
            exact
            path="/course-management"
            Component={AdminCourse}
          />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

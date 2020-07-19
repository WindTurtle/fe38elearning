import axios from "axios";
import { domain, groupID, token } from "../config/settings";

export class CoursesServices {
  getCourseCategories = () => {
    return axios({
      url: `${domain}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET",
    });
  };
  getCourse = () => {
    return axios({
      url: `${domain}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${groupID}`,
      method: "GET",
    });
  };
  getInfoCourse = (courseId) => {
    return axios({
      url: `${domain}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
      method: "GET",
    });
  };
  getCoursesAccepted = (account) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      method: "POST",
      data: account,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  getCourseWaitingAccept = (account) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      method: "POST",
      data: account,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  getCoursesUnregistered = (account) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${account}`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}

export const coursesServices = new CoursesServices();
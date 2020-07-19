import React, { useState } from "react";
import "./AddUserModal.scss";
import swal from "sweetalert";
import { usersServices } from "../../services/UsersServices";
export default function AddUserModal() {
  let [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP08",
      maLoaiNguoiDung: "",
      email: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
      maLoaiNguoiDung: "",
    },
  });
  const handleInput = (e) => {
    var { value, name } = e.target;
    let newValues = { ...state.values, [name]: value };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "This field unempty !" : "",
    };
    setState({ values: newValues, errors: newErrors });
  };
  const handleSubmit = () => {
    let valid = true;
    let { values, errors } = state;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Invalid information");
      return;
    }

    usersServices
      .addUser(values)
      .then(() => {
        swal({
          title: "Add user successful",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          icon: "warning",
          button: "OK",
        });
      });
  };
  return (
    <div
      class="modal fade bd-example-modal-lg"
      id="addUserModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form className="formUser form-add-user">
              <fieldset>
                <legend>Add User</legend>
                <div className="row">
                  <div className="col-6">
                    <ul className="control-form-list">
                      <li className="control-form-item">
                        <label for="username">Username:</label>
                        <input
                          type="text"
                          name="taiKhoan"
                          id="username"
                          onChange={handleInput}
                          required
                        />
                        <span className="text-danger">
                          {state.errors.taiKhoan}
                        </span>
                      </li>
                      <li className="control-form-item">
                        <label for="email">Email:</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleInput}
                          required
                        />
                        <span className="text-danger">
                          {state.errors.email}
                        </span>
                      </li>
                      <li className="control-form-item">
                        <label for="password">Password:</label>
                        <input
                          type="password"
                          name="matKhau"
                          id="password"
                          onChange={handleInput}
                          required
                        />
                        <span className="text-danger">
                          {state.errors.matKhau}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="control-form-list">
                      <li className="control-form-item">
                        <label for="name">Name:</label>
                        <input
                          type="text"
                          name="hoTen"
                          id="name"
                          onChange={handleInput}
                          required
                        />
                        <span className="text-danger">
                          {state.errors.hoTen}
                        </span>
                      </li>
                      <li className="control-form-item">
                        <label for="phone">Phone:</label>
                        <input
                          type="tel"
                          name="soDT"
                          id="phone"
                          onChange={handleInput}
                          required
                        />
                        <span className="text-danger">{state.errors.soDT}</span>
                      </li>
                      <li className="control-form-item">
                        <label for="phone">Type User:</label>
                        <select
                          name="maLoaiNguoiDung"
                          onChange={handleInput}
                          id="loaiNguoiDung"
                          required
                        >
                          <option value="#">--Choose type of user--</option>
                          <option value="HV">Student</option>
                          <option value="GV">Mentor</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

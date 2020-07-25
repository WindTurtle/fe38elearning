import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { usersServices } from "../../services/UsersServices";
import swal from "sweetalert";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#e1f5fe",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
export default function TableFormStudentUnaccepted(props) {
  let { listUser, courseId } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ghiDanh = (maKhoaHoc, taiKhoan) => {
    let info = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: taiKhoan,
    };

    usersServices
      .acceptCourse(info)
      .then((res) => {
        swal({
          title: `Registered User To This Course Successful`,
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
          icon: "error",
          button: "OK",
        });
      });
  };
  const huyGhiDanh = (maKhoaHoc, taiKhoan) => {
    let info = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: taiKhoan,
    };

    usersServices
      .cancelRegisterCourse(info)
      .then((res) => {
        swal({
          title: `Cancel Register Successful`,
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
          icon: "error",
          button: "OK",
        });
      });
  };
  const renderUsers = () => {
    return listUser
      ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((item, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={item.taiKhoan}>
            <TableCell>{item.taiKhoan}</TableCell>
            <TableCell>{item.biDanh}</TableCell>
            <TableCell>{item.hoTen}</TableCell>
            <TableCell>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  className="accept-action"
                  style={{
                    cursor: "pointer",
                    color: "#2cc937",
                  }}
                  onClick={() => {
                    console.log(item.taiKhoan);
                    ghiDanh(courseId, item.taiKhoan);
                  }}
                >
                  <i className="fa fa-check"></i>
                </div>
                <div
                  className="remove-action"
                  style={{
                    cursor: "pointer",
                    color: "#e81b00",
                  }}
                  onClick={() => {
                    console.log(item.taiKhoan);
                    huyGhiDanh(courseId, item.taiKhoan);
                  }}
                >
                  <i className="fa fa-times"></i>
                </div>
              </div>
            </TableCell>
          </TableRow>
        );
      });
  };
  return (
    <Paper className={classes.root}>
      <div className="header-table"></div>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Account</StyledTableCell>
              <StyledTableCell>Alias</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell className="text-center">
                Controls
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderUsers()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={listUser.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

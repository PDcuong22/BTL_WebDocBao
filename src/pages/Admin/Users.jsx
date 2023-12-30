import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import userApi from "../../services/user";
import toast from "react-hot-toast";

export default function Users() {
  const isLoading = false;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await userApi.getUsers();
      setUsers(res);
    };
    fetchDate();
  }, []);

  const handleChangeRole = async (user) => {
    await toast.promise(userApi.updateUser(user), {
      loading: "Updating...",
      success: "Updated!",
      error: "Error!",
    });
  };

  const handleDelete = async (user) => {
    try {
      await toast.promise(userApi.deleteUser(user._id), {
        loading: "Deleting...",
        success: "Deleted!",
        error: "Error!",
      });
      window.location.reload();
    } catch (error) {
      toast.error("Error");
    }
  };

  return isLoading ? (
    <linearGradient />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ngày tạo</TableCell>
            <TableCell>Tên tài khoản</TableCell>
            <TableCell align="right">Quyền hạn</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.length &&
            users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{moment(user.createdAt).format("llll")}</TableCell>
                <TableCell>{user?.userName}</TableCell>
                <TableCell align="right">
                  <FormControl>
                    <InputLabel>Role</InputLabel>
                    <Select
                      variant="standard"
                      defaultValue={user.role}
                      label="Role"
                      onChange={(e) =>
                        handleChangeRole({ ...user, role: e.target.value })
                      }
                    >
                      <MenuItem value={"admin"}>Admin</MenuItem>
                      <MenuItem value={"user"}>User</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDelete(user)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* <UpdateUserModal /> */}
    </TableContainer>
  );
}

import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { authApi } from "../../services/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      userName: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const res = await authApi.login(data);
      if (res.data?.message) return toast.error(res.data.message);
      if (res.user) {
        toast.success("Đăng nhập thành công");
        localStorage.setItem("user", JSON.stringify(res.user));
        if (res.user.role === "admin") {
          window.location.href = "/admin/news";
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại");
    } finally {
      setUsernameErrText("");
      setPasswordErrorText("");
    }
  };

  return (
    <Container>
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5,
          width: 500,
          gap: 3,
          mx: "auto",
          my: 20,
        }}
      >
        <Typography align="center" fontSize={23} fontWeight={600}>
          Đăng nhập
        </Typography>

        <TextField
          name="username"
          type="text"
          label="Tài khoản"
          required
          error={usernameErrText !== ""}
          helperText={usernameErrText}
        />
        <TextField
          name="password"
          type={showPassword ? "text" : "password"}
          label="Mật khẩu"
          error={passwordErrorText !== ""}
          helperText={passwordErrorText}
        />
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Checkbox
            checked={showPassword}
            inputProps={{ "aria-label": "controlled" }}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <Typography>Hiển mật khẩu</Typography>
        </Box>

        <Button fullWidth variant="contained" type="submit">
          Đăng nhập
        </Button>

        <Typography>
          Bạn chưa có tài khoản?{" "}
          <Link
            to={"/register"}
            style={{
              textDecoration: "none",
              fontWeight: 600,
              color: "blue",
            }}
          >
            Đăng ký ngay
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;

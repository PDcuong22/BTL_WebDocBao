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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [cfpasswordErrorText, setcfPasswordErrorText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      userName: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("cfpassword"),
    };

    let error = false;

    if (data.userName.length < 6) {
      setUsernameErrText((prev) => ({
        ...prev,
        username: "Tài khoản yêu cầu tối thiểu là 6 ký tự",
      }));
      error = true;
    }

    if (data.email.length > 100) {
      setEmailErrorText("Email không hợp lệ");
      error = true;
    }
    if (data.password.length < 8) {
      setPasswordErrorText("Mật khẩu yêu cầu tối thiểu là 8 ký tự");
      error = true;
    }
    if (data.password !== data.confirmPassword) {
      setcfPasswordErrorText("Mật khẩu nhập lại không đúng");
      error = true;
    }

    if (error) return;

    try {
      const res = await authApi.register(data);
      if (res.data?.message) return toast.error(res.data.message);
      if (res.user) {
        toast.success("Đăng ký thành công");
        localStorage.setItem("user", JSON.stringify(res.user));
        window.location.href = "/";
      }
    } catch (error) {
      toast.error("Đăng ký thất bại");
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
          Đăng ký
        </Typography>

        <TextField
          name="email"
          type="text"
          label="Email"
          required
          error={emailErrorText !== ""}
          helperText={emailErrorText}
        />
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
        <TextField
          name="cfpassword"
          type={showPassword ? "text" : "password"}
          label="Nhập lại Mật khẩu"
          error={cfpasswordErrorText !== ""}
          helperText={cfpasswordErrorText}
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
          Đăng ký
        </Button>
      </Paper>
    </Container>
  );
};

export default Register;

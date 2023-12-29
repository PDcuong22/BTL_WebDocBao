import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Detail1 from "./pages/Detail1";
import SubCategory from "./pages/SubCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyEditor from "./pages/MyEditor";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Admin/dashboard";
import News from "./pages/Admin/News";
import Users from "./pages/Admin/Users";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Router>
        <Routes>
          <Route path="/insert" element={<MyEditor />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detail/test/:id" element={<Detail1 />} />
          <Route path="/subCategory/:subcategoryId" element={<SubCategory />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/news" element={<News />} />
            <Route path="/admin/Users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Detail1 from "./pages/Detail1";
import SubCategory from "./pages/SubCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyEditor from "./pages/MyEditor";
import AdminPage from "./pages/Admin/Adminpage.jsx";
import CreateArticlePage from "./pages/Admin/CreateArticlePage.jsx";
import EditArticlePage from "./pages/Admin/EditArticlePage.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<>
    <ToastContainer position="top-center" />
    <Router>
      <Routes>
        <Route path="/insert" element={<MyEditor />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/test/:id" element={<Detail1 />} />
        <Route path="/subCategory/:subcategoryId" element={<SubCategory />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/article/create" element={<CreateArticlePage />} />
        <Route path="/admin/article/edit/:articleId" element={<EditArticlePage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;

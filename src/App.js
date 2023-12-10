import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Detail1 from "./pages/Detail1";
import SubCategory from "./pages/SubCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyEditor from "./pages/MyEditor";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/insert" element={<MyEditor />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/test/:id" element={<Detail1 />} />
        <Route path="/subCategory/:subcategoryId" element={<SubCategory />} />
      </Routes>
    </Router>
  );
}

export default App;

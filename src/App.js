import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SubCategory from "./pages/SubCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/subCategory/:subcategoryId" element={<SubCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
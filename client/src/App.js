import {
 BrowserRouter as Router,
 Route,
 Routes,
 BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Posts from "./pages/Posts/Posts";
import Navbar from "./pages/Navbar";
import Layout from "./pages/common/Layout";
import Home from "./pages/Home/Home";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route path="/posts" element={<Posts />} />
     <Route index element={<Home />} />
    </Route>
   </Routes>
  </Router>
 );
}

export default App;

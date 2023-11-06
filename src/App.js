import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectsIndex from "./pages/projects/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<ProjectsIndex/>}/>xx
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

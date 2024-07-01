import logo from './logo.svg';
import './App.css';
import Nav from './compo/Nav';
import About from './compo/About'
import Login from './compo/Login';
import Signin from './compo/Signin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './compo/Footer';
import Contact from './compo/Contact';
import Home from './compo/Home';
import Employee from './compo/Employee';
import Admin from './compo/Admin';
import Emplist from './compo/Emplist';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container my-3">
          <Routes>
            <Route exaxt path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/employee" element={<Employee />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/emplist" element={<Emplist />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

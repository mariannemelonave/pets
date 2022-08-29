import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout() {
  return (
    <Fragment>
      <div className="out_container ">
      
        <nav className="navbar">

      <AuthStatus  />
      
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/protected">Faça Login</Link>
        </li>
      </ul>
      </nav>
      </div>
      <div className="container">
  
    
      </div>
      <Contact />
      <Footer />
      
      </Fragment>
      
     
   
  );
}

export default Layout;

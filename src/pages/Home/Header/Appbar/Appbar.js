import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Appbar.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import headerlogo from '../../../../images/Header/header logo.png'


const Appbar = () => {
  const {user, logOut} = useAuth();
         return (
                  <div>
                  <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                  <Link to="/home" className="ms-5"> <img src={headerlogo} alt=""/></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to="/home"><li className="nav-link active fw-bold fs-5 ms-4">Home</li></Link>
                  <Link to="/services"><li className="nav-link active fw-bold fs-5">Services</li></Link>
                  <Link to="/doctors"><li className="nav-link active fw-bold fs-5">Doctors</li></Link>
                  <Link to="/updates"><li className="nav-link active fw-bold fs-5">Updates</li></Link>
                  <Link to="/shop"><li className="nav-link active fw-bold fs-5">Shop</li></Link>
                  
                  </ul>
                  </div>
                  <div className="me-5">
                  <Navbar className="justify-content-end">
                  {user?.email ?
                  <button onClick={logOut} className="logOut-btn me-4">LogOut</button>:
                    <Link to="/login"><li className="nav-link active fw-bold fs-5  me-4">Registration / LogIn</li></Link>
                    }
                    <Navbar.Text>
                      Signed in as : <a href="#login" className="fw-bold">{user?.displayName}</a>
                    </Navbar.Text>
                  </Navbar>
                  </div>
                  </div>
                  </nav>    
                  </div>
         );
};

export default Appbar;
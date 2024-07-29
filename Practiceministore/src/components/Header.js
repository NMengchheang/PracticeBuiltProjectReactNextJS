import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="images/main-logo.png" className="logo" />
                </a>
                <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="navbar-icon">
                        <use xlinkHref="#navbar-icon" />
                    </svg>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                    <div className="offcanvas-header px-4 pb-0">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/main-logo.png" className="logo" />
                        </a>
                        <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
                    </div>
                    <div className="offcanvas-body">
                        <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link me-4 active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link me-4">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-4" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-4" to="/contact-us">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <div className="user-items ps-5">
                                    <ul className="d-flex justify-content-end list-unstyled">
                                        <li className="search-item pe-3">
                                            <a href="#" className="search-button">
                                                <svg className="search">
                                                <use xlinkHref="#search" />
                                                </svg>
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a href="cart.html">
                                                <svg className="cart">
                                                <use xlinkHref="#cart" />
                                                </svg>
                                            </a>
                                        </li>

                                        <li className="pe-3">
                                            <a href="#" style={{paddingLeft: '1rem'}}>
                                                login
                                            </a>
                                        </li>
                                        <li className="pe-3">
                                            <a href="#">
                                                Sign Up
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

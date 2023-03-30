import React from "react";
import "../assets/css/style.css";


const Navbar = () => {
  return (
    <>
      <main>
        <nav className="navbar navbar-expand-lg background px-5 py-3">
          <div className="container-fluid">

            <a className="navbar-brand text-light fw-bold" href="/">
              Navbar
            </a>   

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >  
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                    >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                  <button
                  className="btn btn-outline-success search-tab"
                  type="submit"
                  >  
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </main>
      <section className="bg-primary"> </section>
    </>
  );
};

export default Navbar;



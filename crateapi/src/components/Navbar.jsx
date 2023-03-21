import React from 'react'
// import Link from '@mui/material/Link';
const Navbar = () => {
  return (
     <> 
      <main> 
      <nav className="navbar navbar-expand-lg background text-light py-3 px-3">
  <div className="container-fluid text-light">
    <a className="navbar-brand text-light" href="/">Navbar</a>
    {/* <Link  to="/">Navar</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-secondary text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </main>
      <section className='bg-primary'> </section>
     </>
  )
}
/* http://api.unsplash.com/photos*/
export default Navbar
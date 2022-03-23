import { Link } from "react-router-dom";


const links = [
  {
    title: "Home",
    link: "/"
  },
  //   add the other link as well
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }, {
    title: "Single Product",
    link: "/single-product"
  }

];

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {links.map(link => (
            <li key={link.title} className="nav-item">
              <Link className="nav-link" to={link.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

   

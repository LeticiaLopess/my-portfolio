import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const Navbar = (props:any) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">My Website</a>
      </Link>
  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sobre">
              <a className="nav-link">Hobbies</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contato">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;
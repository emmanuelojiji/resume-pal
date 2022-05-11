import "./Header.scss";

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="page-width">
        <h3>ResumePal</h3>
        <nav>
          <Link to="/editor">Create</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* Left title */}
      <Link to="/profile" className="title">
        My Profile
      </Link>

      {/* Right buttons */}
      <div>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import {link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
        <Link className="brand" to="/">Campus Gear</Link>
        <nav aria-label="Main Navigation" className="nav-links">
            <Link to="/equipment">Browse Equipment</Link>
            <Link className="button button-small" to="/add-equipment">Add Equipment</Link>
        </nav>
        </header>
    );
}
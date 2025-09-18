import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#121212' : '#f8f9fa';
    document.body.style.color = dark ? '#e9ecef' : '#212529';
  }, [dark]);

  return (

    <nav className={`navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-blue'} shadow-sm`}>

      <div className="container">
        <Link className="navbar-brand" to="/">📚 Mini Learning</Link>
        <div className="d-flex align-items-center">
          <Link to="/leaderboard" className="btn btn-link me-2">Leaderboard</Link>
          <button className="btn btn-outline-secondary me-2" onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </nav>
  );
}
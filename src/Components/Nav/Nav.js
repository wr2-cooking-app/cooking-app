import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Nav.scss";

export default () => {
  const [userData] = useContext(UserContext);

  // don't show on authentication page
  const location = useLocation();
  if (location.pathname === "/") return null;

  return (
    <section className="nav-background">
      <div className="nav">
        <label>Meal2Plan</label>
        <Link to="/test">Test</Link>
        <Link to="/profile">{userData.username}</Link>
      </div>
    </section>
  );
};

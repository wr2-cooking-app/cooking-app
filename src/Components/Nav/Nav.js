import React, { useContext, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Nav.scss";

export default () => {
  const [userData] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  // kick back to auth page if not signed in
  useEffect(() => {
    if (!userData.id) history.push("/");
  }, [history, location, userData.id]);

  // don't show if on auth page
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

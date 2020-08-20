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
        <div>
          <label>Meal2Plan</label>
          <Link to="/search">Search</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">
            {userData.first_name} {userData.last_name}
          </Link>
        </div>
      </div>
    </section>
  );
};

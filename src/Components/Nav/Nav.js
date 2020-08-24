import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Nav.scss";

export default () => {
  const { userData } = useContext(UserContext);
  const [toggle, setToggle] = useState(false)

  const history = useHistory();
  const location = useLocation();

  // kick back to auth page if not signed in
  useEffect(() => {
    if (!userData.id) history.push("/");
  }, [history, location, userData.id]);

  // don't show if on auth page
  if (location.pathname === "/") return null;

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <section className="nav-background">
      <div className="nav">
        <div>
          <img className="m2p-logo" alt="m2p-logo" src="https://media.discordapp.net/attachments/743548935607418881/745783445472673932/logo3.png?width=1440&height=544"/>
        </div>
        <div className="nav-tabs">
          <Link to="/search"><img className='search-img' alt='search-img'src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/220/original/search.png"/></Link>
          <Link to="/dashboard"><img className='planner-img' alt='planner-img' src="https://www.pinclipart.com/picdir/middle/388-3886103_calendar-icon-calendar-symbol-clipart.png"/></Link>
          <Link to="/profile">
            {userData.first_name} {userData.last_name}
          </Link> 
        </div>
      </div>
    </section>
  );
};

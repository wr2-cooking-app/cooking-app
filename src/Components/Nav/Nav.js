import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Nav.scss";
import axios from "axios";

export default () => {
  const { userData, setUserData } = useContext(UserContext);
  const [ toggle, setToggle ] = useState(false);

  const history = useHistory();
  const location = useLocation();

  // kick back to auth page if not signed in
  // useEffect(() => {
  //   if (!userData.id) history.push("/");
  // }, [history, location, userData.id]);

  // don't show if on auth page
  if (location.pathname === "/") return null;

  const handleToggle = () => {
    setToggle(!toggle) 
  }

  const handleLogout = () => {
    axios
      .get("/auth/logout")
      .then(() => {
        setUserData({});
        history.push("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <section className="nav-background">
      <div className="nav">
        <div>
          <img className="m2p-logo" alt="m2p-logo" src="https://cdn.discordapp.com/attachments/719406698015621221/747947162775715870/unknown.png"/>
        </div>
        <div className="nav-tabs">
          <Link to="/search"><img className='search-img' alt='search-img'src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/000/220/original/search.png"/></Link>
          <Link to="/dashboard"><img className='planner-img' alt='planner-img' src="https://www.pinclipart.com/picdir/middle/388-3886103_calendar-icon-calendar-symbol-clipart.png"/></Link>
          <button className='profile-btn' onClick={handleToggle} ><img className='profile-img' src={userData.profile_picture} alt={userData.first_name} /></button>
          {toggle
          ?
          <ul className="options">
          <li className="logout" onClick={handleLogout}>Logout</li>
          </ul>
          :
          null}
        </div>
      </div>
    </section>
  );
};
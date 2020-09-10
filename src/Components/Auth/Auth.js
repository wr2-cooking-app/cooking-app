import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Auth.scss";

function Auth(props) {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const [registering, setRegistering] = useState(false);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [first_name, setFirstName] = useState("");
  let [last_name, setLastName] = useState("");
  let [profile_picture, setProfilePicture] = useState("");

  // forward to search page if already signed in
  // useEffect(() => {
  //   if (userData.id) history.push("/dashboard");
  // }, [userData]);

  const handleRegister = () => {
    axios
      .post("/auth/register", { email, password, first_name, last_name, profile_picture })
      .then((res) => {
        setUserData(res.data);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        setUserData(res.data);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-box">
      <div className="box">
        {registering ? (
          <div className="login-box">
            <h3 className="login-header" style={{ color: "black", textAlign: "center", fontSize: "20px", textDecoration: "underline"}}>Login To Your Profile:</h3>
            <div className="login-box">
              <input className="auth-input"  value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input
              className="auth-input"  
                value={password}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <h3> Register: </h3>
        )}
        {!registering ? (
          <>
            <div className="register-box">
              {profile_picture ? (
                <img className="profile-photo" src={profile_picture} alt={first_name} />
              ) : (
                <img
                  className="profile-photo"
                  src={"https://image.flaticon.com/icons/svg/2948/2948035.svg"}
                  alt={"default"}
                />
              )}
              <input className="auth-input"  value={first_name} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
              <input className="auth-input"  value={last_name} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
              <input className="auth-input"  value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input
                className="auth-input"  
                value={password}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="auth-input" 
                value={profile_picture}
                placeholder="Profile Picture"
                onChange={(e) => setProfilePicture(e.target.value)}
              />
              <button className="auth-button" onClick={handleRegister}>Register</button>
              <p style={{ color: "black" }}>
                Already Registered? <button className="auth-button" onClick={() => setRegistering(!registering)}>Login Here</button>
              </p>
            </div>
          </>
        ) : (
          <div className="login-box">
            <button className="auth-button" onClick={handleLogin}>Login</button>
            <p style={{ color: "black" }}>
              Not Registered? <button className="auth-button" onClick={() => setRegistering(!registering)}>Register Here</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Auth;

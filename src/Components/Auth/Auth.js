import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Auth.scss";

function Auth(props) {
  const [userData, setUserData] = useContext(UserContext);
  const history = useHistory();
  const [registering, setRegistering] = useState(false);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [first_name, setFirstName] = useState("");
  let [last_name, setLastName] = useState("");
  let [profile_picture, setProfilePicture] = useState("");

  const handleRegister = () => {
    axios
      .post("/auth/register", { email, password, first_name, last_name, profile_picture })
      .then((res) => {
        setUserData(res.data);
        history.push("/search");
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        setUserData(res.data);
        history.push("/search");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-box">
      {/* <div className="logo">
                <img  src={"https://cdn.discordapp.com/attachments/743548935607418881/745773571153985736/LogoHeader.png"} />
            </div> */}
      <div className="box">
        {registering ? (
          <>
            <h3>Login To Your Profile:</h3>
            <div className="login-box">
              <input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input
                value={password}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        ) : (
          <h3 className="register"> Register: </h3>
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
              <input value={first_name} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
              <input value={last_name} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
              <input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input
                value={password}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                value={profile_picture}
                placeholder="Profile Picture"
                onChange={(e) => setProfilePicture(e.target.value)}
              />
              <button onClick={handleRegister}>Register</button>
              <p style={{ color: "black" }}>
                Already Registered? <button onClick={() => setRegistering(!registering)}>Login Here</button>
              </p>
            </div>
          </>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <p>
              Not Registered? <button onClick={() => setRegistering(!registering)}>Register Here</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default Auth;

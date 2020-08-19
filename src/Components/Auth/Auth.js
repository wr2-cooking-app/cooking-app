import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

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
    <div>
      {registering ? (
        <>
          <h3>Login To Your Profile:</h3>
          <div>
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
        <h3>Register:</h3>
      )}
      {!registering ? (
        <>
          <div>
            <div>
              {profile_picture ? (
                <img src={profile_picture} alt={first_name} />
              ) : (
                <img src={"https://image.flaticon.com/icons/svg/2948/2948035.svg"} alt={"default"} />
              )}
            </div>
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
          </div>
          <button onClick={handleRegister}>Register</button>
          <p>
            Already Registered? <button onClick={() => setRegistering(!registering)}>Login Here</button>
          </p>
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
  );
}
export default Auth;

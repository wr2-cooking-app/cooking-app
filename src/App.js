import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { setUser } from "./redux/reducer";

function App() {
  const [sessionChecked, setSessionChecked] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  // check session for signed in status
  useEffect(() => {
    // useEffect() does not support async callbacks so we must nest it inside... ugh
    const checkSession = async () => {
      // TODO Aaron set up endpoint
      // const res = await Axios.get("/auth/me");
      // dummy data for now
      const res = { data: { id: 1, username: "Raiguard" } };
      if (res.data) {
        dispatch(setUser(res.data));
      }
      setSessionChecked(true);
    };
    checkSession();
  }, [dispatch]);

  return (
    <div className="App">
      {sessionChecked && (userData.id ? <label>Signed in as {userData.username}</label> : <label>Not signed in</label>)}
    </div>
  );
}

export default App;

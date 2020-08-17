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
    const checkSession = async () => {
      // TODO Aaron set up endpoint
      // const res = await Axios.get("/auth/me");
      const res = {};
      if (res.data) {
        dispatch(setUser(res.data));
      }
      setSessionChecked(true);
    };
    checkSession();
  }, [dispatch]);

  return (
    <div className="App">
      {sessionChecked && (userData.id ? <label>userData.username</label> : <label>Not signed in</label>)}
    </div>
  );
}

export default App;

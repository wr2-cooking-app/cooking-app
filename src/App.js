import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import { UserContext } from "./contexts/UserContext";
import routes from "./routes";

function App() {
  const [sessionChecked, setSessionChecked] = useState(false);
  const [userData, setUserData] = useState({});

  // check session for signed in status
  useEffect(() => {
    // useEffect() does not support async callbacks so we must nest it inside... ugh
    const checkSession = async () => {
      try {
        const res = await Axios.get("/auth/me");
        setUserData(res.data);
      } catch {}
      setSessionChecked(true);
    };
    checkSession();
  }, [setUserData]);

  return (
    <div className="App">
      {
        sessionChecked && (
          // (userData.id ? (
          <UserContext.Provider value={[userData, setUserData]}>
            <Nav />
            {routes}
          </UserContext.Provider>
        )
        // ) : (
        // <label>Not signed in</label>
        // ))
      }
    </div>
  );
}

export default App;

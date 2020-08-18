import React, { useState, useContext } from "react";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";



function Auth(props) {
    const [ userData, setUserData ] = useContext(UserContext);

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    

    return(
        <div>
            
        </div>
    )
}
export default Auth;
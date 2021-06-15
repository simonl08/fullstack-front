import React, { useState } from "react";
import { signup } from "../utils";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");


    const signupHandler = async (e) => {
        e.preventDefault();
        signup(name, email, password, setUser)

        setName("");
        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={signupHandler}>
                <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}></input>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

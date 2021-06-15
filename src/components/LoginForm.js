import React, { useState } from "react";
import { login } from "../utils";
import { Form, StyledInputs, SubmitButton } from "../styles/globalStyles";

export default function LoginForm ({setUser}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        login(email, password, setUser);
        
        setName("");
        setPassword("");
    };
    return (
            <Form onSubmit={loginHandler}>
                <h1>Login</h1>
                <StyledInputs type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></StyledInputs>
                <StyledInputs type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></StyledInputs>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
    );
}

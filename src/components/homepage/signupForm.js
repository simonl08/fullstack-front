import React, { useState } from "react";
import { signup } from "../../utils";
import { Form, StyledInputs, SubmitButton } from "../../styles/globalStyles";

export default function SignUp({setUser}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupHandler = async (e) => {
        e.preventDefault();
        signup(name, email, password, setUser);
        
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <Form onSubmit={signupHandler}>
                <h1>Register/ Create Account</h1>
                <StyledInputs type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value) }></StyledInputs>
                <StyledInputs type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></StyledInputs>
                <StyledInputs type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></StyledInputs>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </div>
    );
}

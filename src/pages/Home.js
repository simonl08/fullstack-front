import React from 'react';

//components
import SignUp from '../components/signupForm';
import LoginForm from '../components/LoginForm';
import HomepageContent from '../components/HomepageContent';

//component styles
import { Container } from '../styles/globalStyles';
import { LoginContainer } from "../styles/globalStyles";

export default function Home({setUser}) {
  return (
      <>
      <Container>
        <HomepageContent/>
        <LoginContainer>
          <SignUp setUser={setUser} />
          <LoginForm setUser={setUser} />
        </LoginContainer>
      </Container>
      </>
  );
}
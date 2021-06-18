import React from 'react';

//components
import SignUp from '../components/homepage/signupForm';
import LoginForm from '../components/homepage/LoginForm';
import HomepageContent from '../components/homepage/HomepageContent';

//component styles
import { LoginContainer, ContainerTemplateHome } from "../styles/globalStyles";
import background from "../images/pexels.jpg";

export default function Home({setUser}) {
  return (
      <>
      <ContainerTemplateHome style={{backgroundImage: `url(${background})`}}>
        <HomepageContent/>
        <LoginContainer>
          <SignUp setUser={setUser} />
          <LoginForm setUser={setUser} />
        </LoginContainer>
      </ContainerTemplateHome>
      </>
  );
}
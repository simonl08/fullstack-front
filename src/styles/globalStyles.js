import styled from "styled-components";
import display from "../images/mmot.jpeg";
// =====homepage ======
export const Container = styled.div` //main page container template
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(101,103,102,1) 51%, rgba(218,210,210,1) 100%);
     background-size: cover; 
`;

export const ContainerTemplateHome = styled.div` //main page container template
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:space-between;
    padding-right: 50px;
   
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
`

export const HomepageContainer = styled.div`
  
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 30px;
   

    h1{
        font-size: 50px;
        margin-top: 30px;
        font-weight: 700;
        color: #BAA98B;
    text-shadow: black 1px 1px;
    margin-bottom: 0px;
    }

    p{
        font-size: 20px;
        text-align: center;
      margin-top: 0px;
        width: 100%;
        color: black;
        text-align: left;
    }
`;

export const LoginContainer = styled.div`
    width: 310px;
    min-height: 80vh;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    align-self: center;
    align-items: center;
    background-color: #675E55;
    box-shadow: 0px 0px 5px gray;
    
    h1{
        font-family: 'Staatliches', cursive;
        font-size: 20px;
        color:#F7C59F;
        text-align: center;
        font-weight: 500;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 75px;


`;

export const StyledInputs = styled.input`
    margin: 2px;
    width: 90%;
    height: 40px;
    border-radius: 4px;
    padding: 0px 10px;
    /* font-family: 'Staatliches', cursive; */
`

export const SubmitButton = styled.button`
    margin-top: 15px;
    align-self: center;
    padding: 5px 30px;
    border-color: transparent;
    box-shadow: 0px 0px 5px gray;
    border-radius: 20px;

    &:hover{
    border-color: transparent;
    }
`
//========== Movie dashboard ============== // 
export const Nav = styled.nav`
    height: 80px;
    display: flex;
   align-items: center;
   justify-content: flex-end;
   background-color: black;
color: #fff;
    ul{
        padding-right: 50px;
        /* margin-top: 60px; */
        font-size: 24px;
    }

    button{
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #baa98b;
        color: #fff;
        margin-right: 40px;
        margin-left: 40px;
    }
`;
// ========== Movie dashboard ============== // 
export const Header = styled.header`
    background-color: black;
    display: flex;
    justify-content: center;
    padding: 1rem;
`

export const FormSearchbox = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchInput = styled.input`
    background-color: transparent;
    border: 2px solid #22254b;
    border-radius: 50px;
    color: white;
    font-family: inherit;
    font-size: 1.2rem;
    /* padding: 0.5rem 10rem; */
    width: 60%;
    height: 40px;
    padding-left: 30px;

    &:focus{
        background-color: #22254b;
        outline: none; 
    }
`;

export const MovieContainer = styled.div` 
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

export const MovieCards = styled.div`
    background-color: #BAA98B;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    overflow: hidden;
    position: relative;
    width: 250px;

    img{
        width: 100%;
    }

    .movie-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    flex: 1;
    }

    h3{
        color: black;
        margin: 10px;
        font-size: 17px; 
        font-weight: 100 !important;
    }
        
    .movieOver{
    background-color: rgba(186, 169, 139,0.7);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: 0px -3px 5px rgba(0,0,0,0.1);
    padding: 10px;
    overflow: hidden;
    color: #eee;
    position: absolute;
    bottom: 0;
    height: 100%;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    }

    h2, p{
        text-align: center;
        margin-top: 20px;
    }


    &:hover .movieOver {
    transform: translateY(0%);
    }
`;







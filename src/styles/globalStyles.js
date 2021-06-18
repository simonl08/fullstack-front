import styled from "styled-components";

// =====homepage ======
export const Container = styled.div` //main page container template
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(101,103,102,1) 51%, rgba(218,210,210,1) 100%);
    /* background-size: cover; */
`;

export const ContainerTemplateHome = styled.div` //homepage container
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(101,103,102,1) 51%, rgba(218,210,210,1) 100%);
`;

export const HomepageContainer = styled.div`
    height: 80vh;
    width: 60vw;
    background: lightblue;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 30px;
    box-shadow: 0px 0px 5px gray;

    h1{
        font-size: 6rem;
        margin-top: 30px;
    }

    p{
        font-size: 2rem;
        text-align: center;
        background: gray;
        width: 100%;
        text-align: left;
        padding: 20px;
    }
`;

export const LoginContainer = styled.div`
    width: 310px;
    min-height: 80vh;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
    box-shadow: 0px 0px 5px gray;
    
    h1{
        font-family: 'Staatliches', cursive;
        font-size: 3rem;
        text-align: center;
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
`
export const SubmitButton = styled.button`
    margin-top: 15px;
    align-self: center;
    padding: 10px 30px;
    border-color: transparent;
    box-shadow: 0px 0px 5px gray;

    &:hover{
    background-color: yellow;
    border-color: transparent;
    }
`
//========== Navbar ============== // 
export const Nav = styled.nav`
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 40px;

    ul{
        padding-right: 50px;
        margin-top: 60px;
        font-size: 24px;
    }

    button{
        padding: 20px;
        margin-right: 40px;
        margin-left: 40px;
    }
`;
// ========== Movie dashboard ============== // 
export const Header = styled.header`
    background-color: #373b69;
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
    background-color: #373b69;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    overflow: hidden;
    position: relative;
    width: 250px;

    img{
        width: 100%;
        height: 375px;
    }

    .movie-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    min-height: 150px;
    margin-bottom: 15px;
    }

    h3{
        color: white;
        font-size: 24px;
    }

    .rating{
        display: inline-block;
        position: relative;
        justify-content: flex-end;
        left: 95px;
        bottom: 470px;
        align-items: flex-end;
    }

    //rating font size
    span{
        font-size: 20px;
    }
        
    .movieOver{
    background-color: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: 0px -3px 5px rgba(0,0,0,0.1);
    color: #22254b;
    position: absolute;
    bottom: 0;
    overflow: auto;
    height: 100%;
    transform: translateY(90%);
    transition: transform 0.3s ease-in-out;
    }

    h2, p{
        text-align: center;
        margin-top: 20px;
    }

    .movieOver:hover {
    transform: translateY(0%);
    }

    &:hover{
        /* box-sizing: border-box; */
        border:solid 1px yellow;
        transition: 0.2s ease;
        
    }
`;
   

  




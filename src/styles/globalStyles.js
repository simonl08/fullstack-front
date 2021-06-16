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

export const ContainerTemplateHome = styled.div` //main page container template
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(101,103,102,1) 51%, rgba(218,210,210,1) 100%);
    /* background-size: cover; */
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
    /* font-family: 'Staatliches', cursive; */
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

// ========== Movie dashboard ============== // 
export const Header = styled.header`
    background-color: #373b69;
    display: flex;
    justify-content: center;
    padding: 1rem;
`

export const SearchInput = styled.input`
    background-color: transparent;
    border: 2px solid #22254b;
    border-radius: 50px;
    color: white;
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.5rem 5.5rem;

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
    }

    .movie-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    }

    h3{
        color: white;
        margin: 10px;
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
   

  




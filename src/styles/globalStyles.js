import styled from "styled-components";


// =====homepage ======
export const Container = styled.div` //main page container template
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
    font-family: 'Staatliches', cursive;
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
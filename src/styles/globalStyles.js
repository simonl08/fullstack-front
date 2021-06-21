import styled from "styled-components";
// =====homepage ======
export const Container = styled.div`
  //main page container template
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: black;
`;

//homepage container
export const ContainerTemplateHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
`;
export const HomepageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 30px;

  h1 {
    font-size: 50px;
    margin-top: 30px;
    font-weight: 700;
    color: #baa98b;
    text-shadow: black 1px 1px;
  }

  p {
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
  background-color: #675e55;
  box-shadow: 0px 0px 5px gray;

  h1 {
    font-family: "Staatliches", cursive;
    font-size: 40px;
    color: #f7c59f;
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
`;
export const SubmitButton = styled.button`
  margin-top: 15px;
  align-self: center;
  padding: 5px 30px;
  border-color: transparent;
  box-shadow: 0px 0px 5px gray;
  border-radius: 20px;
  &:hover {
    border-color: transparent;
  }
`;
//========== Navbar ============== //
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  color: #fff;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 40px;
  border-bottom: 6px solid #baa98b;;

  ul {
    padding-right: 50px;
    font-size: 24px;
  }

  ul a{
    text-decoration: none;
    color: white;
  }
  
  ul a:hover{
    color: #baa98b;
    border-bottom: 4px solid #baa98b;
  }

  button {
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    border: 4px solid #baa98b;
    color: #fff;
  }

  button:hover {
    background-color: #baa98b;
    cursor: pointer;
  }
`;
// ========== Movie dashboard ============== //
export const Header = styled.header`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const FormSearchbox = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: 2px solid #baa98b;
  border-radius: 50px;
  color: white;
  font-family: inherit;
  font-size: 1.2rem;
  width: 60%;
  height: 40px;
  padding: 0 30px 0 30px;

  &:focus {
    /* background-color: #baa98b; */
    outline: none;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCards = styled.div`
  background-color: #baa98b;
  border-radius: 3px;
  margin: 1rem;
  overflow: hidden;
  position: relative;
  width: 250px;

  img {
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
    margin-bottom: 5px;
    }

  h3{
    color: white;
    font-size: 24px;
    padding-bottom: 20px;
  }

  .rating {
    display: inline-block;
    position: relative;
    justify-content: flex-end;
    left: 95px;
    bottom: 470px;
    align-items: flex-end;
  }

  //rating font size
  span {
    font-size: 20px;
  }

  .movieOver {
    background-color: rgba(120,108,86,0.7);
    overflow: hidden;
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    transform: translateY(90%);
    transition: transform 0.3s ease-in-out;
  }

  h2 {
    text-align: center;
    margin-top: 15px;
  }

  p {
    font-size: 1.2rem;
    margin-top: 15px;
    text-align: center;
  }

  .movieOver:hover {
    transform: translateY(0%);
    color: white;
  }

  &:hover {
    border: solid 1px yellow;
    transition: 0.2s ease;
  }
`;


// Pagination (page number results)

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 2rem;
  border-top: 6px solid #baa98b;;

  li {
    list-style: none;
    display: inline;
    overflow-y: auto;
    margin: 5px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover {
    color: #baa98b;
  }
`;
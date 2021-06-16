import { Nav } from "../styles/globalStyles"

export default function Navbar({ user, setUser }) {
  const logoutHandler = () => {
    setUser("");
    console.log(user);
  };

  return (
    <Nav>
      <ul>WatchList</ul>
      <ul>Movie List</ul>
      <ul>hi {user}</ul>
      <button onClick={() => logoutHandler()}>Logout</button>
    </Nav>
  );
}

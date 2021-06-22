import { Nav } from "../styles/globalStyles"
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const logoutHandler = () => {
    setUser("");
  };

  return (
    <Nav>   
      <ul><Link to="/dashboard">Movie List</Link></ul>
      {/* <ul><Link to="/watchlist">Watchlist</Link></ul> */}
      <ul>WatchList</ul>
      <ul>Hello {user}</ul>
      <button onClick={() => logoutHandler()}>Logout</button>
    </Nav>
  );
}

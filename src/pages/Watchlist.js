import Navbar from "../components/Navbar";

export default function WatchList({setUser, user}) {
    return (
        <>
        <Navbar setUser={setUser} user={user}/>
        <h1>WatchList</h1>
        </>
    );
  }
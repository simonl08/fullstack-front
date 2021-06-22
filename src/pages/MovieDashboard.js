//components
import MovieList from '../components/dashboard/MovieList';
import Navbar from '../components/Navbar'

export default function MovieDashboard({user, setUser}) {

  return (
      <>
        <Navbar setUser={setUser} user={user}/>
        <MovieList/>
      </>
  );
}
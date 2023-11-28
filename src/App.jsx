// All the imports
import { NavBar } from "./components/Navbar";
import { MovieList } from "./components/MovieList";
import { Filter } from "./components/Filter";
import { AddMovie } from "./components/AddMovie";
import { movies } from "./data";
import { useMemo, useState } from "react";

function App() {
  // The state that collects all the movies
  const [myMovies, setMyMovies] = useState(movies);

  // State to trigger re-render when movies are updated
  const [random, setRandom] = useState(0);

  // Use useMemo to memoize movies and prevent unnecessary re-renders
  const memorizedMovies = useMemo(() => {
    return { myMemorizedMovies: myMovies };
  }, [random]);

  return (
    <div>
      {/* Navbar of the app */}
      <NavBar />

      {/* Filter section */}
      <section className="flex flex-col space-y-10 items-center">
        {/* Main title */}
        <h2 className="main--title text-[#FFCC00] text-2xl md:text-5xl xl:text-6xl">
          Welcome to Movie Haven...
        </h2>

        {/* Filter component to filter movies */}
        <Filter setMyMovies={setMyMovies} memorizedMovies={memorizedMovies} />

        {/* AddMovie component to add new movies */}
        <AddMovie
          setMyMovies={setMyMovies}
          setRandom={setRandom}
          memorizedMovies={memorizedMovies}
        />

        {/* Condition to check if movies exist */}
        {myMovies.length === 0 ? (
          <div className="text-center py-24 text-3xl">
            Searched movies did not return any result
          </div>
        ) : (
          // Display MovieList if there are movies
          <MovieList myMovies={myMovies} />
        )}
      </section>
    </div>
  );
}

export default App;

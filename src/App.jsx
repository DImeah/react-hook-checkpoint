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

  const [random, setRandom] = useState(0);

  // let memorize the movies ina a useMemo Hook

  const memorizedMovies = useMemo(() => {
    return { myMemorizedMovies: myMovies };
  }, [random]);
  return (
    <div>
      {/* Navbar of the app */}
      <NavBar />
      {/* Filter button */}

      <section className="flex flex-col space-y-10 items-center">
        <h2 className="main--title text-[#FFCC00] text-2xl md:text-5xl xl:text-6xl">
          Movies you would Love
        </h2>
        <Filter setMyMovies={setMyMovies} memorizedMovies={memorizedMovies} />
        <AddMovie
          setMyMovies={setMyMovies}
          setRandom={setRandom}
          memorizedMovies={memorizedMovies}
        />

        {/* Condition to check if movie is true */}
        {myMovies.length === 0 ? (
          <div className="text-center py-24 text-3xl">
            Searched movies did not return any result
          </div>
        ) : (
          <MovieList myMovies={myMovies} />
        )}
      </section>
    </div>
  );
}

export default App;

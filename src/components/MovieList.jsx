import React from "react";
import { MovieCard } from "./MovieCard";

// MovieList component displays a list of MovieCard components for the given movies
export const MovieList = ({ myMovies }) => {
  return (
    // Container for the list of movie cards, using Flexbox for layout
    <div className="flex flex-wrap justify-center gap-10">
      {/* Map through each movie and render a MovieCard component */}
      {myMovies.map((m) => {
        // Using the MovieCard component to display individual movie details
        return <MovieCard key={m.ID} m={m} />;
      })}
    </div>
  );
};

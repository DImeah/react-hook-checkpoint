import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ myMovies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {myMovies.map((m) => {
        return <MovieCard key={m.ID} m={m} />;
      })}
    </div>
  );
};

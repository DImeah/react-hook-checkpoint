import React from "react";
import { Select } from "antd";
import { Input } from "antd";
const { Search } = Input;

export const Filter = ({
  memorizedMovies: { myMemorizedMovies },
  setMyMovies,
}) => {
  // Function to filter movies by rate
  const filterByRate = (rate) => {
    // Filter movies based on the selected rating
    let filteredMovies = myMemorizedMovies.filter(
      (item) => item.rating === Number(rate)
    );
    // Update the state with the filtered movies
    setMyMovies(filteredMovies);
  };

  // Function to filter movies by search
  const filterBySearch = (value) => {
    // Filter movies based on the search value in the title
    let filteredMovies = myMemorizedMovies.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase().trim())
    );
    // Update the state with the filtered movies
    setMyMovies(filteredMovies);
  };

  // Rendered content on the screen
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      {/* Search input for movie title */}
      <Search
        placeholder="Search for movie"
        allowClear
        size="large"
        className="bg-custGreen"
        onSearch={(value) => filterBySearch(value)}
      />

      {/* Dropdown for selecting movie ratings */}
      <Select
        defaultValue="Ratings"
        style={{ width: 200 }}
        allowClear
        onChange={(value) => filterByRate(value)}
        options={[
          { value: "1", label: "⭐" },
          { value: "2", label: "⭐⭐" },
          { value: "3", label: "⭐⭐⭐" },
          { value: "4", label: "⭐⭐⭐⭐" },
          { value: "5", label: "⭐⭐⭐⭐⭐" },
        ]}
      />
    </div>
  );
};

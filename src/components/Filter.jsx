import React from "react";
import { Select } from "antd";
import { Input } from "antd";
const { Search } = Input;

export const Filter = ({
  memorizedMovies: { myMemorizedMovies },
  setMyMovies,
}) => {
  // filter movies by rate
  const filterByRate = (rate) => {
    let filterdMovies = myMemorizedMovies.filter(
      (item) => item.rating === Number(rate)
    );
    setMyMovies(filterdMovies);
  };

  // filter movies by Search
  const filterBySearch = (value) => {
    let filteredMovies = myMemorizedMovies.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLowerCase().trim())
    );
    setMyMovies(filteredMovies);
  };

  // what its returning to the screen
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      <Search
        placeholder="Search for movie"
        allowClear
        size="large"
        className="bg-custGreen"
        onSearch={(value) => filterBySearch(value)}
      />
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

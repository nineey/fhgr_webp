import React from "react";
import Select from "react-select";

export default function GenreSelector({ setSelectedGenre, setPage }) {
  // Available options to select
  const options = [
    { value: "Documentaries", label: "Documentaries" },
    { value: "International TV Shows", label: "International TV Shows" },
    { value: "TV Dramas", label: "TV Dramas" },
    { value: "TV Mysteries", label: "TV Mysteries" },
  ];

  // set selected genre and at the same time page = 1
  function handlePageOnChange(e) {
    setSelectedGenre(e);
    setPage(1);
  }

  // Return genre selector from 'react-select'
  return (
    <Select
      placeholder="Select genre ..."
      className="mt-3 w-50 text-dark"
      options={options}
      onChange={handlePageOnChange}
      isClearable={true}
      clearValue={null} // When select is empty, then value = null
    />
  );
}

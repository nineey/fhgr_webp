import axios from "axios";
import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function GenreSelector({ setSelectedGenre, setPage }) {
  const [genres, setGenres] = useState([]);
  const [placeholder, setPlaceholder] = useState("Select genre ...");

  useEffect(() => {
    // Get list of all genres from API on page load
    const getFullGenreList = async () => {
      try {
        const allGenres = (await axios.get(`/api/genre/all`)).data;
        setGenres(allGenres);
      } catch (error) {
        setPlaceholder("Genre not found");
        console.error(error);
      }
    };
    getFullGenreList();
  }, []);

  // Prepare genre options for filter selector
  const options = genres.map((e) => {
    return { value: e, label: e };
  });

  // Set selected genre and reset page = 1
  function handlePageOnChange(e) {
    setSelectedGenre(e);
    setPage(1);
  }

  // Return genre selector from 'react-select'
  return (
    <>
      <Select
        placeholder={placeholder}
        className="mt-3 w-50 text-dark"
        options={options}
        onChange={handlePageOnChange}
        isClearable={true}
        clearValue={null} // When select is empty, then value = null
      />
    </>
  );
}

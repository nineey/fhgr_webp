import React, { useState, useEffect } from "react";
import Filter from "./filter/Filter";
import SearchBar from "./filter/SearchBar";
import GenreSelector from "./filter/Select";
import List from "./list/List";
import Pagination from "./list/Pagination";
import axios from "axios";

export default function Library() {
  const [data, setData] = useState([]);
  const [activeType, setActiveType] = useState();
  const [selectedGenre, setSelectedGenre] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [itemCounter, setItemCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function requestData() {
      let data;
      const genre = selectedGenre ? selectedGenre.value : null;
      const type = activeType ? activeType : null;

      if (!genre && !type) {
        data = (await axios.get(`/api/unfiltered?page=${page}`)).data;
      }

      if (genre && type) {
        data = (
          await axios.get(
            `/api/filter?&type=${type}&genre=${genre}&page=${page}`
          )
        ).data;
      }

      if (!genre && type) {
        data = (await axios.get(`/api/filter?&type=${type}&page=${page}`)).data;
      }

      if (genre && !type) {
        data = (await axios.get(`/api/filter?&genre=${genre}&page=${page}`))
          .data;
      }

      setData(data[1]);
      setItemCounter(data[0]);
      setMaxPages(Math.ceil(data[0] / 10));

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    requestData();
  }, [page, selectedGenre, activeType, searchQuery]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <Filter setActiveType={setActiveType} activeType={activeType} />
          <GenreSelector
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>

        <div className="col-sm-6">
          <SearchBar value={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>

      <List
        netflixLibrary={data}
        itemCounter={itemCounter}
        activeType={activeType}
        selectedGenre={selectedGenre}
        searchQuery={searchQuery}
        isLoading={isLoading}
      />
      {itemCounter !== 0 ? (
        <Pagination page={page} setPage={setPage} maxPages={maxPages} />
      ) : (
        ""
      )}
    </>
  );
}

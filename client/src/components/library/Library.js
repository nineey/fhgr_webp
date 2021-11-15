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
  const [itemCounter, setItemCounter] = useState(0);

  useEffect(() => {
    async function requestData() {
      let data;
      if (selectedGenre && activeType) {
        data = (
          await axios.get(
            `/api/filter?genre=${selectedGenre.value}&type=${activeType}&page=${page}`
          )
        ).data;
      }
      if (selectedGenre && !activeType) {
        data = (
          await axios.get(
            `/api/filter?genre=${selectedGenre.value}&page=${page}`
          )
        ).data;
      }
      if (!selectedGenre && activeType) {
        data = (await axios.get(`/api/filter?type=${activeType}&page=${page}`))
          .data;
      }
      if (!activeType && !selectedGenre) {
        data = (await axios.get(`/api/unfiltered?page=${page}`)).data;
      }

      setData(data[1]);
      setItemCounter(data[0]);
    }
    requestData();
  }, [page, selectedGenre, activeType]);

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
      />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

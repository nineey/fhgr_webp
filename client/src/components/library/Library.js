import React, { useState, useEffect, useCallback } from "react";
import TypeFilter from "./filter/TypeFilter";
import SearchBar from "./filter/SearchBar";
import GenreSelector from "./filter/GenreSelector";
import List from "./list/List";
import ListPagination from "../utils/Pagination";
import axios from "axios";

export default function Library() {
  const [data, setData] = useState([]);
  const [activeType, setActiveType] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [itemCounter, setItemCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Request data from API according to filters in front app
  const requestData = useCallback(async () => {
    const genre = selectedGenre ? selectedGenre.value : null;
    const type = activeType ? activeType : null;
    const search = searchQuery ? searchQuery : null;

    // Use axios to get data from API
    try {
      const data = (
        await axios.get("/api/filter", {
          params: { type, genre, search, page },
        })
      ).data;
      // Response is an array of [itemCounter, [actual data]]
      // Index 0 = itemCounter
      // Index 1 = filtered data
      setData(data[1]);
      setItemCounter(data[0]);
      // Calculate maximal number of pages (used for pagination)
      setMaxPages(Math.ceil(data[0] / 10));

      // Added some timeout to see the loading spinner actually spinning :)
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }, [page, selectedGenre, activeType, searchQuery]);

  // Get data on page load or when user sets new filter
  useEffect(() => {
    requestData();
  }, [requestData]);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <TypeFilter
            setActiveType={setActiveType}
            activeType={activeType}
            setPage={setPage}
          />
          <GenreSelector
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            setPage={setPage}
          />
        </div>

        <div className="col-sm-6 mt-3 mt-md-0">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setPage={setPage}
          />
        </div>
      </div>
      <List
        currentData={data}
        itemCounter={itemCounter}
        activeType={activeType}
        selectedGenre={selectedGenre}
        searchQuery={searchQuery}
        isLoading={isLoading}
      />
      {isLoading || itemCounter === 0 ? (
        ""
      ) : (
        <ListPagination page={page} setPage={setPage} maxPages={maxPages} />
      )}
    </>
  );
}

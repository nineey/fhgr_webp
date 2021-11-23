import React, { useState, useEffect, useCallback } from "react";
import Filter from "./filter/Filter";
import SearchBar from "./filter/SearchBar";
import GenreSelector from "./filter/Select";
import List from "./list/List";
import ListPagination from "./list/Pagination";
import axios from "axios";

export default function Library() {
  const [data, setData] = useState([]);
  const [activeType, setActiveType] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState();
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [itemCounter, setItemCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // request data from API according to filters in front app
  const requestData = useCallback(async () => {
    const genre = selectedGenre ? selectedGenre.value : null;
    const type = activeType ? activeType : null;

    // use axios to load data from API
    const data = (
      await axios.get(`/api/filter`, {
        params: { type, genre, page },
      })
    ).data;

    // response is an array of [itemCounter, [actual data]]
    // index 0 = itemCounter
    // index 1 = filtered data
    setData(data[1]);
    setItemCounter(data[0]);
    // calculate maximal number of pages (used for pagination)
    setMaxPages(Math.ceil(data[0] / 10));

    // added some timeout to see the loading spinner spinning :)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [page, selectedGenre, activeType]);

  // reset page to 1 whenever number of items in the list changes
  useEffect(() => {
    setPage(1);
  }, [itemCounter]);

  // get data on page refresh and when filter changes
  useEffect(() => {
    requestData();
  }, [requestData]);

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
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
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

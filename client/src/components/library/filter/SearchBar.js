import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery, setPage }) {
  return (
    <>
      <input
        className="form-control w-50"
        type="search"
        placeholder="Search for title ..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setPage(1);
        }}
      />
    </>
  );
}

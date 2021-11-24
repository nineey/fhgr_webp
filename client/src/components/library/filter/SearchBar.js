import React from "react";
// import styled from "styled-components";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <>
      <input
        className="form-control w-50"
        type="search"
        placeholder="Search for title ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
}

import React from "react";
// import styled from "styled-components";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <>
      <input
        className="form-control w-50"
        type="search"
        placeholder="Search for title ..."
        aria-label="Search"
        value={searchQuery}
        onChange={setSearchQuery}
      />
      {/* <SearchButton
        className="search-button"
        type="submit"
        onClick={props.handleSearchBarSubmit}
      >
        Search
      </SearchButton> */}
    </>
  );
}

// const SearchButton = styled.button`
//   background-color: var(--primary-color);
//   border-radius: 4px;
//   text-decoration: none;
//   color: var(--secondary-color);
//   border: 2px solid var(--secondary-color);
// `;

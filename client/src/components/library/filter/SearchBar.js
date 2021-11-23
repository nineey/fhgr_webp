import React from "react";
// import styled from "styled-components";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  console.log(searchQuery);
  return (
    <>
      <input
        className="form-control w-50"
        type="search"
        placeholder="Search for title ..."
        value={searchQuery}
        onChange={() => setSearchQuery()}
      />
      {/* <button type="submit">Search</button> */}
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

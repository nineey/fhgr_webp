import React, { useMemo, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function List({
  netflixLibrary,
  activeType,
  selectedGenre,
  searchQuery,
}) {
  // State Hooks
  const [isLoading, setIsLoading] = useState(true);

  // Use useMemo to return memoized value (performance booster)
  // Value is only recalculated when one value in dependencies array has changed
  const netflixLibraryFiltered = useMemo(() => {
    if (!netflixLibrary) return [];
    if (netflixLibrary) {
      setIsLoading(false);

      // Do this when type and genre filters are active
      if (selectedGenre != null && activeType != null) {
        return netflixLibrary.filter(
          (netflixTitle) =>
            netflixTitle.type === activeType &&
            netflixTitle.listed_in.includes(selectedGenre["value"])
        );
      }
      // Do this when only genre filter is active
      if (selectedGenre != null) {
        return netflixLibrary.filter((netflixTitle) =>
          netflixTitle.listed_in.includes(selectedGenre["value"])
        );
      }
      // Do this when only type filter is active
      if (activeType != null) {
        return netflixLibrary.filter(
          (netflixTitle) => netflixTitle.type === activeType
        );
      }
      return netflixLibrary;
    }
  }, [activeType, selectedGenre, netflixLibrary]);

  const netflixLibraryFilteredAndSearched = useMemo(() => {
    if (!searchQuery) return netflixLibraryFiltered;
    // Filter list using searchQuery
    return netflixLibraryFiltered.filter((netflixTitle) => {
      return netflixTitle.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, netflixLibraryFiltered]);

  return (
    <section className="mainSection">
      {isLoading ? <LoadingSpinner /> : ""}
      {/* First, check if filtered list is ready */}
      {netflixLibraryFilteredAndSearched ? (
        // Then check if list has entries
        // If yes, generate list. If no, show message
        netflixLibraryFilteredAndSearched.length !== 0 ? (
          <>
            <div className="lead mt-3">
              #Items: {netflixLibraryFilteredAndSearched.length}
            </div>
            <StyledTable className="table table-sm mt-5">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop the filtered list and show elements in table */}
                {netflixLibraryFilteredAndSearched.map((netflixElement) => (
                  <tr key={netflixElement.show_id}>
                    <td>{netflixElement.type}</td>
                    <td>{netflixElement.title}</td>
                    <td>{netflixElement.listed_in}</td>
                    <td>
                      {/* Link to particular detail page */}
                      <Link to={`details/${netflixElement.show_id}`}>More</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </>
        ) : (
          <div className="lead mt-5">No matches :(</div>
        )
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
}

const StyledTable = styled.table`
  color: var(--secondary-color);
`;

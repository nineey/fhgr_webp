import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";
import { Link } from "react-router-dom";

export class List extends Component {
  render() {
    const netflixLibrary = this.props.netflixLibrary;
    let netflixLibraryFiltered;
    const activeType = this.props.activeType;
    const selectedGenre = this.props.selectedGenre;

    if (netflixLibrary) {
      // console.log(netflixLibrary, activeType);
      if (selectedGenre != null && activeType != null) {
        netflixLibraryFiltered = netflixLibrary.filter(
          (netflixTitle) =>
            netflixTitle.type === activeType &&
            netflixTitle.listed_in.includes(selectedGenre["value"])
        );
      } else if (activeType != null) {
        netflixLibraryFiltered = netflixLibrary.filter(
          (netflixTitle) => netflixTitle.type === activeType
        );
      } else if (selectedGenre != null) {
        netflixLibraryFiltered = netflixLibrary.filter((netflixTitle) =>
          netflixTitle.listed_in.includes(selectedGenre["value"])
        );
      } else {
        netflixLibraryFiltered = netflixLibrary;
      }
    }

    return (
      <section className="mainSection">
        {/* First check if filtered list is ready */}
        {netflixLibraryFiltered ? (
          // Then check if list has entries
          // If yes, generate list. If no, show message
          netflixLibraryFiltered.length !== 0 ? (
            <>
              <div className="lead mt-3">
                #Items: {netflixLibraryFiltered.length}
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
                  {/* Check for entries in the filtered */}
                  {netflixLibraryFiltered.map((netflixElement) => (
                    <tr key={netflixElement.show_id}>
                      <td>{netflixElement.type}</td>
                      <td>{netflixElement.title}</td>
                      <td>{netflixElement.listed_in}</td>
                      <td>
                        <Link to={`details/${netflixElement.show_id}`}>
                          More
                        </Link>
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
}

const StyledTable = styled.table`
  color: var(--secondary-color);
`;
export default List;

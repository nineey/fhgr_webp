import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";
import { Link } from "react-router-dom";

export class List extends Component {
  render() {
    const netflixLibrary = this.props.netflixLibrary;
    let netflixLibraryFiltered;
    const activeGenre = this.props.activeGenre;

    if (netflixLibrary) {
      // Filter netflix data by type
      switch (activeGenre) {
        case "Movie":
          netflixLibraryFiltered = netflixLibrary.filter(
            (netflixTitle) => netflixTitle.type === "Movie"
          );
          break;
        case "TVShow":
          netflixLibraryFiltered = netflixLibrary.filter(
            (netflixTitle) => netflixTitle.type === "TV Show"
          );
          break;
        default:
          netflixLibraryFiltered = netflixLibrary;
          break;
      }
    }

    return (
      <section className="mainSection">
        {netflixLibraryFiltered ? (
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
              {netflixLibraryFiltered.map((netflixElement) => (
                <tr key={netflixElement.show_id}>
                  <td>{netflixElement.type}</td>
                  <td>{netflixElement.title}</td>
                  <td>{netflixElement.listed_in}</td>
                  <td>
                    <Link to={`details/${netflixElement.show_id}`}>More</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
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

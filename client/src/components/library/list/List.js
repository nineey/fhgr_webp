import React from "react";
import LoadingSpinner from "../../utils/LoadingSpinner";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InfoCircle } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";

export default function List({ currentData, itemCounter, isLoading }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoading && itemCounter === 0) {
    return <div className="lead mt-5">No matches :(</div>;
  }

  return (
    <Fade>
      <section className="mainSection">
        <div className="lead mt-3">#Items: {itemCounter}</div>
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
            {currentData.map((netflixElement) => (
              <tr key={netflixElement.show_id}>
                <td>{netflixElement.type}</td>
                <td>{netflixElement.title}</td>
                <td>{netflixElement.listed_in}</td>
                <td>
                  {/* Link to particular detail page */}
                  <Link to={`details/${netflixElement.show_id}`}>
                    <StyledInfoIcon>
                      <InfoCircle />
                    </StyledInfoIcon>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </section>
    </Fade>
  );
}

const StyledTable = styled.table`
  color: var(--secondary-color);
`;

const StyledInfoIcon = styled.div`
  font-size: 1.3em;
  margin-top: -5px;
`;

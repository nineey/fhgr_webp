import React from "react";
import { useParams } from "react-router-dom";

export default function Details(props) {
  let netflixLibrary = props.netflixLibrary;
  let getDetailsById;

  // Get the current show id from URL param
  const { show_id } = useParams();

  // Find and assign the matching element by id
  if (netflixLibrary) {
    getDetailsById = netflixLibrary.find(
      (element) => element.show_id === show_id
    );
  }

  return (
    <>
      {/* If show details are ready, expose the data */}
      {getDetailsById ? (
        <>
          <div className="row mt-4">
            <div className="lead">{getDetailsById.type}</div>
            <h3>{getDetailsById.title}</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p className="mt-4">
                <strong>Added on Netflix</strong>
                <br /> {getDetailsById.date_added}
              </p>
              <p className="mt-4">
                <strong>Duration</strong>
                <br /> {getDetailsById.duration}
              </p>
              <p className="mt-4">
                <strong>Genre</strong>
                <br /> {getDetailsById.listed_in}
              </p>
            </div>
            <div className="col-md-4">
              <p className="mt-4">
                <strong>Cast</strong>
                <br /> {getDetailsById.cast}
              </p>
              <p className="mt-4">
                <strong>Description</strong>
                <br /> {getDetailsById.description}
              </p>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

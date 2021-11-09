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
          <ul>
            <li>{getDetailsById.show_id}</li>
            <li>{getDetailsById.title}</li>
          </ul>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

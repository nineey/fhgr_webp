import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [showDetails, setShowDetails] = useState([]);

  // Get the current show id from URL param
  const { showId } = useParams();

  // get data from API
  useEffect(() => {
    async function fetchData() {
      let getDetails = (await axios.get(`/api/find?showId=${showId}`)).data;
      setShowDetails(getDetails);
    }
    fetchData();
  }, [showId]);

  return (
    <>
      {/* If show details are ready, expose the data */}
      {showDetails ? (
        <>
          <div className="row mt-4">
            <div className="lead">{showDetails.type}</div>
            <h3>{showDetails.title}</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p className="mt-4">
                <strong>Added on Netflix</strong>
                <br /> {showDetails.date_added}
              </p>
              <p className="mt-4">
                <strong>Duration</strong>
                <br /> {showDetails.duration}
              </p>
              <p className="mt-4">
                <strong>Genre</strong>
                <br /> {showDetails.listed_in}
              </p>
            </div>
            <div className="col-md-4">
              <p className="mt-4">
                <strong>Cast</strong>
                <br /> {showDetails.cast}
              </p>
              <p className="mt-4">
                <strong>Description</strong>
                <br /> {showDetails.description}
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
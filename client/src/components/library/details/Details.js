import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../utils/LoadingSpinner";
import Fade from "react-reveal/Fade";

export default function Details() {
  const [showDetails, setShowDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Get the current show id from URL param
  const { showId } = useParams();

  // Get data from API
  useEffect(() => {
    async function fetchData() {
      const getDetails = (await axios.get(`/api/find?showId=${showId}`)).data;
      setShowDetails(getDetails);
    }
    fetchData();
    setTimeout(() => setLoading(false), 500);
  }, [showId]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Fade>
        <div className="row mt-4">
          <div className="lead">{showDetails.type}</div>
          <h3>{showDetails.title}</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className="mt-4">
              <strong>Release year</strong>
              <br /> {showDetails.release_year}
            </p>

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
              <strong>Director</strong>
              <br />{" "}
              {showDetails.director ? showDetails.director : "not available"}
            </p>
            <p className="mt-4">
              <strong>Cast</strong>
              <br /> {showDetails.cast ? showDetails.cast : "not available"}
            </p>
            <p className="mt-4">
              <strong>Description</strong>
              <br /> {showDetails.description}
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}

import React, { Component } from "react";

export class Filter extends Component {
  render() {
    const className = "btn btn-outline-light";

    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={
            className + (this.props.activeGenre === "All" ? " active" : "")
          }
          onClick={() => this.props.setActiveGenre("All")}
        >
          All
        </button>
        <button
          type="button"
          className={
            className + (this.props.activeGenre === "Movie" ? " active" : "")
          }
          onClick={() => this.props.setActiveGenre("Movie")}
        >
          Movies
        </button>
        <button
          type="button"
          className={
            className + (this.props.activeGenre === "TVShow" ? " active" : "")
          }
          onClick={() => this.props.setActiveGenre("TVShow")}
        >
          TV Shows
        </button>
      </div>
    );
  }
}

export default Filter;

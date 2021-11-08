import React, { Component } from "react";

export class Filter extends Component {
  render() {
    const className = "btn btn-outline-light";

    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={
            className + (this.props.activeType === null ? " active" : "")
          }
          onClick={() => this.props.setActiveType(null)}
        >
          All
        </button>
        <button
          type="button"
          className={
            className + (this.props.activeType === "Movie" ? " active" : "")
          }
          onClick={() => this.props.setActiveType("Movie")}
        >
          Movies
        </button>
        <button
          type="button"
          className={
            className + (this.props.activeType === "TV Show" ? " active" : "")
          }
          onClick={() => this.props.setActiveType("TV Show")}
        >
          TV Shows
        </button>
      </div>
    );
  }
}

export default Filter;

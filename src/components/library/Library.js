import React, { Component } from "react";
import Filter from "./filter/Filter";
import Search from "./filter/Search";
import List from "./list/List";

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGenre: "All",
    };
  }

  setActiveGenre = (genre) => {
    this.setState({ activeGenre: genre });
  };

  render() {
    return (
      <>
        <Filter
          setActiveGenre={this.setActiveGenre}
          activeGenre={this.state.activeGenre}
        />
        <Search />
        <List
          netflixLibrary={this.props.netflixLibrary}
          activeGenre={this.state.activeGenre}
        />
      </>
    );
  }
}

export default Library;

import React, { Component } from "react";
import Filter from "./filter/Filter";
import Search from "./filter/Search";
import GenreSelector from "./filter/Select";
import List from "./list/List";

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: null,
      selectedGenre: null,
    };
  }

  // Handle state 'activeType' (All/Movie/TV Show)
  setActiveType = (type) => {
    this.setState({ activeType: type });
  };

  // Handle state 'selectedGenre' ('null' by default)
  handleSelectedGenre = (selectedGenre) => {
    this.setState({ selectedGenre: selectedGenre });
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-6">
            <Filter
              setActiveType={this.setActiveType}
              activeType={this.state.activeType}
            />
            <GenreSelector
              selectedGenre={this.state.selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
            />
          </div>

          <div className="col-sm-6">
            <Search />
          </div>
        </div>

        <List
          netflixLibrary={this.props.netflixLibrary}
          activeType={this.state.activeType}
          selectedGenre={this.state.selectedGenre}
        />
      </>
    );
  }
}

export default Library;

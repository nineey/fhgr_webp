import React, { Component } from "react";
import Filter from "./filter/Filter";
import SearchBar from "./filter/SearchBar";
import GenreSelector from "./filter/Select";
import List from "./list/List";
import Pagination from "./list/Pagination";
import axios from "axios";

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeType: null,
      selectedGenre: null,
      searchQuery: null,
      page: 1,
    };
  }

  componentDidMount = async () => {
    let data = (await axios.get(`/api?page=${this.state.page}`)).data;
    this.setState({ data: data });
  };

  componentDidUpdate = async () => {
    let data = (await axios.get(`/api?page=${this.state.page}`)).data;
    this.setState({ data: data });
  };

  // Handle state 'activeType' (All/Movie/TV Show)
  setActiveType = (type) => {
    this.setState({ activeType: type });
  };

  // Handle state 'selectedGenre' ('null' by default)
  handleSelectedGenre = (selectedGenre) => {
    this.setState({ selectedGenre: selectedGenre });
  };

  // Handle input in search bar
  handleSearchBarInput = (searchQuery) => {
    this.setState({ searchQuery: searchQuery.target.value });
  };

  handlePaginationUp = (page) => {
    this.setState({ page: (this.state.page += 1) });
    console.log(this.state.page);
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
            <SearchBar
              value={this.state.searchQuery}
              handleSearchBarInput={this.handleSearchBarInput}
              handleSearchBarSubmit={this.handleSearchBarSubmit}
            />
          </div>
        </div>

        <List
          netflixLibrary={this.state.data}
          activeType={this.state.activeType}
          selectedGenre={this.state.selectedGenre}
          searchQuery={this.state.searchQuery}
          isLoading={this.state.isLoading}
        />
        <Pagination handlePaginationUp={this.handlePaginationUp} />
      </>
    );
  }
}

export default Library;

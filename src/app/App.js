// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import dependencies
import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";
import Library from "../components/library/Library";
import Stats from "../components/stats/Stats";
import Details from "../components/library/details/Details";
import Footer from "../components/container/Footer";

class App extends Component {
  // Full data set (> 8000 items)
  dataSource = "https://data.nicolasneeser.ch/netflix_data_all.json";
  // Short data set for testing (10 items)
  // dataSource = "https://data.nicolasneeser.ch/netflix_data_short.json";

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  // Call the API after App component is rendered
  componentDidMount = async () => {
    let data = (await axios.get(this.dataSource)).data;
    // Slice the set to reduce data
    data = data.slice(0, 100);
    // Assign to state variable 'data'
    this.setState({ data: data });
  };

  render() {
    return (
      <>
        <StyledApp className="container">
          <Header />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Library netflixLibrary={this.state.data} />}
            />
            <Route path="/stats" element={<Stats />} />
            <Route
              path="/details/:show_id"
              element={<Details netflixLibrary={this.state.data} />}
            />
          </Routes>
        </StyledApp>
        <Footer />
      </>
    );
  }
}

const StyledApp = styled.div`
  min-height: calc(90vh - 3.5em);
`;

export default App;

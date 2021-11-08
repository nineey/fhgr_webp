// import dependencies
import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
// import { Home, Stats } from "../pages/pages";

import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Library from "../components/library/Library";
import Stats from "../components/stats/Stats";
import Details from "../components/library/details/Details";
import Footer from "../components/container/Footer";

class App extends Component {
  // dataSource = "https://data.nicolasneeser.ch/netflix_data_all.json";
  dataSource = "https://data.nicolasneeser.ch/netflix_data_short.json";

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount = async () => {
    const data = (await axios.get(this.dataSource)).data;
    this.setState({ data: data });
    // console.log(this.state.data);
  };

  render() {
    return (
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
        <Footer />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  // margin: auto;
  // width: 50%;
`;

export default App;

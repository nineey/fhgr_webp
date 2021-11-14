// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import dependencies
import React, { Component } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";
import Library from "../components/library/Library";
import Stats from "../components/stats/Stats";
import Details from "../components/library/details/Details";
import Footer from "../components/container/Footer";

class App extends Component {
  render() {
    return (
      <>
        <StyledApp className="container">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/details/:showId" element={<Details />} />
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

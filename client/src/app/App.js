import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

// import components
import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";
import Library from "../components/library/Library";
import Stats from "../components/stats/Stats";
import Details from "../components/library/details/Details";
import Footer from "../components/container/Footer";
import Page404 from "../components/utils/Page404";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <StyledApp className="container mt-3 mt-md-5">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/details/:showId" element={<Details />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </StyledApp>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const StyledApp = styled.div`
  min-height: calc(90vh - 3.8em);
`;

import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";

// import components
import Header from "../components/container/Header";
import Navbar from "../components/container/Navbar";
import Library from "../components/library/Library";
import Stats from "../components/stats/Stats";
import Details from "../components/library/details/Details";
import Footer from "../components/container/Footer";
import Page404 from "../components/utils/Page404";
import ThemeToggle from "../components/utils/ThemeToggle";

// create context for theme state across all components
export const ThemeContext = createContext();

// get last theme value from local storage. if no theme is set, turn on dark mode (true)
function getInitalTheme() {
  const savedTheme = localStorage.getItem("darkTheme");
  const initialValue = JSON.parse(savedTheme);
  if (initialValue === null) return true;
  return initialValue;
}

export default function App() {
  // default theme is dark
  const [darkTheme, setDarkTheme] = useState(getInitalTheme());

  return (
    <>
      <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
        <GlobalStyle darkTheme={darkTheme} />
        <StyledApp className="container mt-5">
          <div className="row">
            <div className="col-11">
              <Header />
            </div>
            <div className="col-1 d-flex justify-content-end mt-3">
              <ThemeToggle />
            </div>
          </div>

          <Navbar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/details/:showId" element={<Details />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </StyledApp>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

const StyledApp = styled.div`
  min-height: calc(90vh - 3.8em);
`;

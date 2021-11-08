import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <footer>
          <div className="container pt-3">
            <p>Handcrafted by DBM students @FHGR</p>
          </div>
        </footer>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.div`
  footer {
    background-color: white;
    height: 3.5em;
  }

  p {
    color: var(--primary-color);
  }
`;

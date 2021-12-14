import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <footer>
          <div className="container pt-3">
            <p>
              Powered by <b>React</b> and <b>Express</b>
            </p>
          </div>
        </footer>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.div`
  footer {
    background-color: var(--secondary-color);
    height: 3.5em;
    bottom: 0;
    margin-top: 5em;
  }

  p {
    color: var(--primary-color);
  }
`;

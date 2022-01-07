import React from "react";
import styled from "styled-components";
import { Github, PlugFill } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <footer>
          <div className="container pt-3">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="poweredBy">
                  Handcrafted by <b>DBM students </b>
                  <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://github.com/nineey/fhgr_webp"
                  >
                    <StyledIcon>
                      <Github />
                    </StyledIcon>
                  </a>
                </p>
              </div>
              <div className="col d-flex justify-content-end">
                <p className="madeBy d-none d-lg-block">
                  Powered by <b>React</b> and <b>Express </b>
                  <StyledIcon>
                    <PlugFill />
                  </StyledIcon>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.div`
  footer {
    background-color: var(--secondary-color);
    height: 3.7em;
    bottom: 0;
    margin-top: 5em;
  }

  .poweredBy {
    color: var(--primary-color);
    margin-top: -4px;
  }

  .madeBy {
    color: var(--primary-color);
    margin-top: -4px;
  }

  @media (max-width: 1030px) {
    margin-top: 7em;
  }
`;

const StyledIcon = styled.span`
  font-size: 1.3em;
  color: var(--primary-color);
`;

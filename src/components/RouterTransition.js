import React from "react";
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { css } from "emotion";

const RouterTransition = ({ children }) => {
  // Header efter classnavnet er den class du vil have transition på
  const styleTransition = css`
    .fade-enter .configArticle,
    .fade-enter .headerAnimation {
      opacity: 0;
      z-index: 1;
    }
    .fade-enter.fade-enter-active .configArticle,
    .fade-enter.fade-enter-active .headerAnimation {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
    .fade-enter header {
      opacity: 0;
    }
    .fade-enter.fade-enter-active header {
      opacity: 1;
      transition: height 500ms ease-in;
    }
    /* .fade-enter .splashTransition {
      opacity: 0;
      z-index: 1;
    }
    .fade-enter.fade-enter-active .splashTransition {
      opacity: 1;
      transition: opacity 500ms ease-in;
    } */
  `;

  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className={styleTransition}>
          <CSSTransition key={location.key} classNames="fade" timeout={1500}>
            <Router location={location} className="router">
              {children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
};

export default RouterTransition;

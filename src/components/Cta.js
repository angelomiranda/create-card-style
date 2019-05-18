import React from "react";
import { ReactComponent as Chevron } from "../images/chevron.svg";

import "./Cta.css";

function Cta({ setExpanded, expanded }) {
  return (
    <div className="cta" onClick={() => setExpanded(!expanded)}>
      {expanded ? (
        <>
          <span />
          <span>
            <strong>View Calendar</strong>
            <span className="cta-icon"> > </span>
          </span>
          <span />
        </>
      ) : (
        <>
          <span />
          <span>
            <strong>More Performances (4)</strong>
          </span>
          <Chevron />
        </>
      )}
    </div>
  );
}
export default Cta;

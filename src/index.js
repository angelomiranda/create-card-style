import React, { useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./Global.css";

import CardHeader from "./components/CardHeader";
import CardList from "./components/CardList";
import Cta from "./components/Cta";

function App() {
  const [expanded, setExpanded] = useState(false);

  const cardClass = classNames({
    card: true,
    "card-expanded": expanded
  });

  return (
    <div className="App">
      <section className={cardClass}>
        <CardHeader />
        <CardList />
      </section>

      <Cta expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

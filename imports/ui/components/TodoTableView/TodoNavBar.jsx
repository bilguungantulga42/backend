import React from "react";

export const TodoNavBar = (props) => {
  const { onImpressumClick, onReset } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href={{}}
          onClick={onReset}
          style={{ color: "white" }}
        >
          TODO Manager
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href={{}}
                onClick={onReset}
                style={{ color: "white" }}
              >
                Übersicht
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={{}}
                onClick={onImpressumClick}
                style={{ color: "white" }}
              >
                Impressum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

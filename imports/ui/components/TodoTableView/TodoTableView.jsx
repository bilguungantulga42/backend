import React, { useState } from "react";
import { CreateTodo } from "../CreateTodo";
import { EditTodo } from "../EditTodo";
import { Impressum } from "../Impressum";
import "./styles.css";

const head = ["Index", "Titel", "Deadline", "Fortschritt"];
const body = [
  { title: "Einkaufen", deadline: "13.10.2022", progress: "100%" },
  { title: "SkSys HA", deadline: "16.01.2025", progress: "50%" },
  { title: "Zähne putzen", deadline: "01.11.2028", progress: "27%" },
];

export const TodoTableView = () => {
  const [visible, setVisible] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  const onRowClick = () => {
    setVisible(false);
    setShowEdit(true);
  };

  const onCreateClick = () => {
    setVisible(false);
    setShowCreate(true);
  };

  const onImpressumClick = (e) => {
    e.preventDefault();
    setVisible(false);
    setShowEdit(false);
    setShowCreate(false);
    setShowImpressum(true);
  };

  const onReset = (e) => {
    e.preventDefault();
    setShowEdit(false);
    setShowCreate(false);
    setShowImpressum(false);
    setVisible(true);
  };

  return (
    <>
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
      <div className="container">
        {visible && (
          <>
            <table className="table table-hover">
              <thead>
                <tr>
                  {head.map((value, index) => {
                    return (
                      <th key={index} scope="col">
                        {value}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {body.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{++index}</th>
                      <td>{value.title}</td>
                      <td>{value.deadline}</td>
                      <td>{value.progress}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => onRowClick(value)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          Löschen
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="btn btn-outline-primary" onClick={onCreateClick}>
              + TODO erstellen
            </button>
          </>
        )}
        {showEdit && <EditTodo setReset={onReset} />}
        {showCreate && <CreateTodo setReset={onReset} />}
        {showImpressum && <Impressum />}
      </div>
    </>
  );
};

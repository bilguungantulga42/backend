import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

import { CreateTodo } from "../CreateTodo";
import { EditTodo } from "../EditTodo";
import { Impressum } from "../Impressum";
import { TodoTableRow } from "./TodoTableRow";
import { TodoTableHead } from "./TodoTableHead";
import { TodoNavBar } from "./TodoNavBar";

import { TodosCollection } from "../../../api/todos";
import "./styles.css";

export const TodoTableView = () => {
  const [visible, setVisible] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);

  const data = useTracker(() => TodosCollection.find({}).fetch());

  const onEditClick = (element) => {
    setCurrentElement(element);
    setVisible(false);
    setShowEdit(true);
  };

  const onDeleteClick = ({ _id }) => TodosCollection.remove(_id);

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
      <TodoNavBar onReset={onReset} onImpressumClick={onImpressumClick} />
      <div className="todo">
        {visible && (
          <>
            <table className="table">
              <TodoTableHead />
              <tbody>
                {data.map((value, index) => {
                  return (
                    <TodoTableRow
                      key={index}
                      element={value}
                      index={index}
                      onEditClick={onEditClick}
                      onDeleteClick={onDeleteClick}
                    />
                  );
                })}
              </tbody>
            </table>
            <button className="btn btn-outline-primary" onClick={onCreateClick}>
              + TODO erstellen
            </button>
          </>
        )}
        {showEdit && <EditTodo setReset={onReset} element={currentElement} />}
        {showCreate && <CreateTodo setReset={onReset} />}
        {showImpressum && <Impressum />}
      </div>
    </>
  );
};

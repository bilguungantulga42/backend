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
  const data = useTracker(() => TodosCollection.find({}).fetch());

  const onRowClick = () => {
    setVisible(false);
    setShowEdit(true);
  };

  const onDeleteClick = ({index}) => TodosCollection.remove(index);

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
                      onRowClick={onRowClick}
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
        {showEdit && <EditTodo setReset={onReset} />}
        {showCreate && <CreateTodo setReset={onReset} />}
        {showImpressum && <Impressum />}
      </div>
    </>
  );
};

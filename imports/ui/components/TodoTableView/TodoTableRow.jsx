import React from "react";
import "./styles.css";

export const TodoTableRow = (props) => {
  const { element, index, onEditClick, onDeleteClick } = props;
  const { title, progress, deadline } = element;

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{deadline}</td>
      <td>{progress}</td>
      <td>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onEditClick(element)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteClick(element)}
        >
          Löschen
        </button>
      </td>
    </tr>
  );
};

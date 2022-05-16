import React, { useState } from "react";
import "./styles.css";

export const TodoTableRow = (props) => {
  const { element, index, onRowClick } = props;
  const { title, progress, deadline } = element;
  useState;

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{deadline}</td>
      <td>{progress}</td>
      <td>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onRowClick(element)}
        >
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm">Löschen</button>
      </td>
    </tr>
  );
};

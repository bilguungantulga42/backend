import React from "react";

export const TodoTableHead = () => {
  const head = ["Index", "Titel", "Deadline", "Fortschritt"];

  return (
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
  );
};

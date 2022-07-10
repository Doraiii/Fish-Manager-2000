import React from "react";

function Table(props) {
  const tdStyle = {
    border: "2px solid Navy",
    backgroundColor: "MintCream",
  };

  const { id, name, amount, description } = props.fish;
  return (
    <tr>
      <td style={tdStyle}>{name}</td>
      <td style={tdStyle}>{amount}</td>
      <td style={tdStyle}>{description}</td>
      <td>
        <button onClick={() => props.delate(id)}>Delate</button>
        <button onClick={() => props.edit(id)}>Edit</button>
      </td>
    </tr>
  );
}

export default Table;

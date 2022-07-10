import React from "react";
import Fish from "./Fish";

const tableStyle = {
  border: "3px solid Navy",
  fontFamily: "Tahoma",
  fontSize: "20px",
  backgroundColor: "AliceBlue",
};

const Table = (props) => {
  const net = props.lake.map((fish) => 
    <Fish key={fish.id} fish={fish} edit={props.edit} delate={props.delate} />
  );
  
  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{net}</tbody>
      </table>
    </>
  );
};

export default Table;

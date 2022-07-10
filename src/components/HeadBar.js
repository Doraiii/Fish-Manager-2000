import React from "react";
import Filter from "./Filter";

const HeadBar = (props) => {


  const { sortById, sortByAmount, sortByLetter } = props;
  
  return (
    <>
      <Filter serch={props.serch}/>
      <br></br>
      <button onClick={() => sortById()}>Kolejnością dodania</button>
      <button onClick={() => sortByAmount()}>Ilością</button>
      <button onClick={() => sortByLetter()}>Alfabetycznie</button>
    </>
  );
};

export default HeadBar;

import React from "react";
import "./App.css";
import MatFlex from "./components/FlexMat/MatFlex";
import TableData from "./components/FlexMat/TableData";
import MatGrid from "./components/GridMat/MatGrid";

function App() {
  return (
    <div>
      <TableData />
      <TableData />
      <TableData />
      <div className="MF">
        <MatFlex />
      </div>
      <TableData />
      <MatGrid />
    </div>
  );
}

export default App;

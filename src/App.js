import React from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import FlexBox from "./components/Flex/FlexBox";
import RQuery from "./components/RQuery";

function App() {
  return (
    // <div className="row">
    //   <div className="col-md-8 offset-md-2">
    //     <Contacts />
    //   </div>
    // </div>
    <div className="App">
      {/* <FlexBox /> */}
      <RQuery />
    </div>
  );
}

export default App;

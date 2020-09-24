import React from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import Button from "./Button";
import DatePicker from "./DatePicker";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Know Your Birthday",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Know your Birthday!</h1>
        
         <span><SearchBox className="one-line" /></span>
          <span><DatePicker className="one-line"/></span>
          <span><Button className="one-line"/></span>
        
      </div>
    );
  }
}

export default App;

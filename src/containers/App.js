import React from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import DatePicker from "../components/DatePicker";

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
        <div className="container">
          <SearchBox className="item" />
          <DatePicker className="item" />
          <Button className="item" />
        </div>
      </div>
    );
  }
}

export default App;

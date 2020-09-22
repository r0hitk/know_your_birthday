import React from 'react';
import './App.css';
import SearchBox from "./SearchBox";
import Button from "./Button";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title : "Know Your Birthday",

    };
  }

  render(){
    return (
      <div className="App">
        <h1>
          Know your Birthday!
        </h1>
        <SearchBox/>
        <Button/>
      </div>
    );
  }
 
}

export default App;

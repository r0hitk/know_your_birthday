import React from 'react';
import './App.css';

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
        Hello World!
      </div>
    );
  }
 
}

export default App;

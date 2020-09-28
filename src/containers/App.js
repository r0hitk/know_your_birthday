import React from "react";
import { connect } from "react-redux";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import DatePicker from "../components/DatePicker";
import { createCard } from "../actions,js";

const mapStateToProps = (state) => {
  return {
    name: state.showACard.name,
    date: state.showACard.date,
    cards: state.showACard.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event) => {
      dispatch(setName(event.target.value));
    },
  };
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Know your Birthday!</h1>
        <div className="container">
          <SearchBox className="item" />
          <DatePicker className="item" />
          <Button className="item" btnClick={this.props.onClick} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

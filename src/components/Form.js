import React from "react";
import Button from "./Button";
import DatePicker from "./DatePicker";
import SearchBox from "./SearchBox";

const Form = ({btnClick}) => {
  return (
    <div>
      <form onSubmit={btnClick}>
        <SearchBox />
        <DatePicker />
        <Button/>
      </form>
    </div>
  );
};

export default Form;

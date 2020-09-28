import { SET_NAME_FIELD } from "./constants";

const initialstate = {
  name: "",
  date: "",
  cards: []
};

const showACard = (state = initialstate, action = {}) => {
  switch (action.type) {
    case SET_NAME_FIELD:
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
};

import {INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BTNS, ENABLE_BTNS} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state
}

const initialThemeState = {
  value: 'light'
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload
      };
    default: return state
  }
}

function disableReducer(state= false, action) {
  switch (action.type) {
    case DISABLE_BTNS:
      return true;
    case ENABLE_BTNS:
      return false;
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  disabled: disableReducer
});
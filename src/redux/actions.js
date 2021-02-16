import {DECREMENT, INCREMENT, CHANGE_THEME, DISABLE_BTNS, ENABLE_BTNS} from "./types";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function disableBtns() {
  return {
    type: DISABLE_BTNS
  };
}

export function enableBtns() {
  return {
    type: ENABLE_BTNS
  };
}

export function asyncIncrement() {
  return function(dispatch) {
    dispatch(disableBtns());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableBtns());
    }, 2000);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}
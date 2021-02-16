import './styles.css'
import {applyMiddleware, createStore, compose} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, decrement, increment, changeTheme} from "./redux/actions";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const async = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const count = document.getElementById('counter');

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

add.addEventListener('click', () => {
  store.dispatch(increment());
});

sub.addEventListener('click', () => {
  store.dispatch(decrement());
});

async.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light';
  store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
  const state = store.getState();
  count.textContent = state.counter.toString();
  document.body.className = state.theme.value;
  [add, sub, async, themeBtn].forEach(btn => btn.disabled = state.disabled);
});

store.dispatch({type: 'INIT APPLICATION'});
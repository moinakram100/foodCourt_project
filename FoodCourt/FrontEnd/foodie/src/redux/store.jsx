import {createStore} from "redux"
import rootReducer from "./reducer/rootreducer"

const persistedState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : {};

const store = createStore(rootReducer,persistedState)

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState()));
  });

export default store
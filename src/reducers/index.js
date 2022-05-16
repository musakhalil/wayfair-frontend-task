import { createStore } from 'redux';
import menuStateReducer from './MenuReducer';

let store = createStore(menuStateReducer);

export default store;
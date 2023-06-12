import {createStore,applyMiddleware} from 'redux';
import modify from './reducer/apiReducer';
import thunk from 'redux-thunk';

let store = createStore(modify,applyMiddleware(thunk));
export default store;
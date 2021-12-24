import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import artReducer from './ArtList/Artlist';
import detailReducer from './DetailsPage/DetailsPage';

const reducer = combineReducers({
  artReducer,
  detailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

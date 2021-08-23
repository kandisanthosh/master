import { employee_reducer } from './users/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension'
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  StoreEnhancer,
} from 'redux';
import thunk from 'redux-thunk';
import { employeeReducer } from './users';

const appReducer = combineReducers({
 users : employeeReducer,
  
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const storeEnhancers: StoreEnhancer = compose(
  applyMiddleware(thunk),
  devToolsEnhancer({}),
);

const store = createStore(rootReducer, storeEnhancers);


export default store;

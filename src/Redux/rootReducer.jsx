import { combineReducers } from 'redux';
import cakeReducer from './Cake/CakeReducer';
import iceCreamReducer from './Icecream/IceCreamReducer';
import userReducer from './User/userReducer';
import postReducer from './Posts/PostReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  post: postReducer,
});

export default rootReducer;

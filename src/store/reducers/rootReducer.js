
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import blogReducer from './blogReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    blog: blogReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import newsReducer from './reducers/news';

const reducer = combineReducers({
    news: newsReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
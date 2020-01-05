import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Store/reducers';
import thunk from 'redux-thunk';

const App = () => {
    return <Home/>
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);
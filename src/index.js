import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';
import {loadActivities} from "./actions/activityActions";

const store = configureStore();
store.dispatch(loadActivities());

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
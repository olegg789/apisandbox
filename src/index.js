import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './js/store/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

import {setStory} from "./js/store/router/actions";

import '@vkontakte/vkui/dist/vkui.css';
import './css/main.css';
import bridge from '@vkontakte/vk-bridge';

import App from './App';

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

async function startApp() {
    let userSeenIntroCheck = await bridge.send("VKWebAppStorageGet", {keys: ['userSeenIntro']})

    if (userSeenIntroCheck.keys[0].value === '') {
        store.dispatch(setStory('Intro', 'base'))
    } else {
        store.dispatch(setStory('home', 'base'));
    }

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
    
    bridge.send('VKWebAppInit', {})
    import('./eruda.js').then(({ default: eruda }) => {})
};


startApp()
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

import Intro from "./js/panels/Intro";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));
bridge.subscribe((e) => {
    switch (e.detail.type) {
        case 'VKWebAppUpdateConfig':
            let schemeAttribute = document.createAttribute('scheme');
            schemeAttribute.value = e.detail.data.scheme ? e.detail.data.scheme : 'client_light';
            document.body.attributes.setNamedItem(schemeAttribute);
            break;

        default:
            break;
    }
})

store.dispatch(setStory('home', 'base'));

let userSeenIntroCheck = bridge.send("VKWebAppStorageGet", {keys: ['userSeenIntro']})

console.log(userSeenIntroCheck)
/*
{userSeenIntroCheck === false &&
    <Provider store={store}>
        <Intro/>
    </Provider>,
    document.getElementById('root')
}*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

bridge.send('VKWebAppInit', {})
import('./eruda.js').then(({ default: eruda }) => {}) 
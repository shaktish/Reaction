import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore } from 'redux';


import PubSub from './pubsub';
import RootReducer from './reducer/RootReducer';
import {PubSubContext} from './pubsub';


// import MessageActionCreator from './Action/MessaegActionCreater';

const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//console.log('store.getData()', store.getState());
store.subscribe(()=>{ console.log(store.getState(), 'store.getData() via subscibe')})

const pubsub = new PubSub();

pubsub.addListener({
    message : (msgObj)=>{
        //const stupid = {user:'whoami', type:'asdasd'};
        const {message} = msgObj;
        console.log(msgObj, 'msgObj');

        store.dispatch(message);
    }
})

// setTimeout(()=>{
//     pubsub.publish(MessageActionCreator('Hello React'));    
// },1000)



ReactDOM.render(
<Provider store={store}>
    <PubSubContext.Provider value={{pubsub}}>
        <App />
    </PubSubContext.Provider>
</Provider>, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

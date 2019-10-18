import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store';



const render = () => {
    fancylog();
return ReactDOM.render(<App />,document.getElementById("root"));
}

render();

registerServiceWorker();
store.subscribe(render);

function fancylog () {
    console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
    console.log(store.getState());
}
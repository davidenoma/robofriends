import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
<div>
    {/* The id, name and email are props of the Card Object
    which we can access in a calling functions with props 
    or through destructuring */}
    <App/>

</div>


,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

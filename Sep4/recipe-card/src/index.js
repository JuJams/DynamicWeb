// import react lib core
import React from 'react';

// allows to write JSX for web browsers and render it to the DOM
import ReactDOM from 'react-dom/client';

// to use a component we have to import it first and then we can use it
import App from './App';

// Optional is to import a local css file
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
	    domain="dev-s-kmhkyz.us.auth0.com"
	    clientId="v6rjwQ03QA4xbeAbWc4tG9aRDh4sNH5Q"
	    redirectUri={window.location.origin}
  	>
    	<Provider store={store}>
      	<BrowserRouter>
        	<React.StrictMode>
          	<App />
        	</React.StrictMode>
      	</BrowserRouter>
    	</Provider>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import App3 from './App';
import App1 from './customhook/App1';
import App2 from './customhook/App2';
import App3 from './usereducer/App3';
import App4 from './redux2/App4';
import App5 from './redux3/App5';
import App6 from './redux4/App6';
import App7 from './counterredux/App7';

import App8 from './protrouterdom/App8';
import App9 from './rander/App9';
import App10 from './Formhandling/App10';
import App11 from './registerform/App11';
import App12 from './carausel/App12';
import App13 from './cardslider/App13';
import App14 from './cardslider2/App14';
import App15 from './fetch/App15';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    
    {/* <App1 /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <App4/> */}
    {/* <App6/> */}
    {/* <App7/> */}
    {/* <Auth0Provider
    domain="dev-yq6pe5f3gy062727.us.auth0.com"
    clientId="Q9e4fHRHqcyIohIB1LVwWVxXR0qKPmLm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App8/>
  </Auth0Provider>, */}
  {/* <App9/> */}
  {/* <App10/> */}
  {/* <App11/> */}
  {/* <App12/> */}
<App13/>
{/* <App14/> */}
{/* <App15/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

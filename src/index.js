import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,theme} from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ysoo3vav5gf288ci.us.auth0.com"
     clientId="vN6Wm1RMaDPZq8LOI9JUJgdk0ptk0eZr"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}>
    <App />
    </Auth0Provider>
  <Analytics />
  </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();

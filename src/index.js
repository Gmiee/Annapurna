import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,theme} from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  <Analytics />
  </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();

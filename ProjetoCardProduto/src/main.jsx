import {ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeScreen from './Screen/Home';
import './styles/index.css';
import {theme} from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HomeScreen />
    </ChakraProvider>
  </React.StrictMode>,
);

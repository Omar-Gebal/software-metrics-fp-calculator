import logo from './logo.svg';
import { store, persistor } from './state/store'
import './App.css';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

import Main from './Main';


function App() {
  useEffect(() => {localStorage.clear()}, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        < Main/>
      </PersistGate>
    </Provider>
  );
}

export default App;
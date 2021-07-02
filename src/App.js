import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import counterReducer from './reducers/counterReducer'
import './App.css'
const store = createStore(counterReducer)
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;
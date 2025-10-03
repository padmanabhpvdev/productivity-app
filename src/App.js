import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Productivity Task Manager</h3>
        <TaskManager />
      </div>
    </Provider>
  );
}

export default App;
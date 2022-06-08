import logo from './Logo-BankKerajaanLangit.svg';
import './App.css';
import React from 'react';

function App() {
  const [todos] = React.useState([
    "mehul","junid","hellios"
  ]);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        {
          todos.map(todo => {
            return <li>{todo}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

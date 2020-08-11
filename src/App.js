import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=93p3LxR9xfM"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux Tutorial
          </a>
        </header>
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

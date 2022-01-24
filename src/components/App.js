import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import logo from "../images//ic_launcher.png";

function App() {
  return (
    <div className="ui tabular menu">
      <i className="music icon"></i>
      <a className="item active">
        Menu1
      </a>
      <a className="item">
        Menu2
      </a>
    </div>
  );
}



export default App;

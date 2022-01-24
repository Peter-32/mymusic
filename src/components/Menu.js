import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function Menu() {
  return (
    <div>
        <div className="ui left vertical menu sidebar">
          <a className="item">
            Item 1
          </a>
          <a className="item">
            Item 2
          </a>
          <a className="item">
            Item 3
          </a>
        </div>
        <div className="pusher">
          Your sites actual content
        </div>
    </div>
  );
}


export default Menu;

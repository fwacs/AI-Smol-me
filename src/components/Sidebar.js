import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
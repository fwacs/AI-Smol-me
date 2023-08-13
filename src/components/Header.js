import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <header className="header">
        <h1>Website Title</h1>
        <button onClick={this.toggleDropdown}>
          {this.state.dropdownOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {this.state.dropdownOpen && (
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

export default Header;
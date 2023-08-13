import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define your state here
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
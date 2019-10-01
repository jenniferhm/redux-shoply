import React from 'react';
import './App.css';
import StoreListContainer from './Containers/StoreListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StoreListContainer />
        <button>Cart</button>
      </div>
    );
  }
}

export default App;

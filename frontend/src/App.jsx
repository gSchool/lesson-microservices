import './App.css';
import HeaderBar from './HeaderBar';
import InventoryContainer from './Inventory/InventoryContainer';
import React from 'react'
class App extends React.Component {
  render() {
    return <div className="App">
      <HeaderBar />
      <InventoryContainer />
    </div>
  }
}

export default App;

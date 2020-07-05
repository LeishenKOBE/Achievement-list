import React from 'react';
import './App.less';
import Header from './components/Header/Header'
import Body from './components/Body/Body'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body name="许嵩"></Body>
    </div>
  );
}

export default App;

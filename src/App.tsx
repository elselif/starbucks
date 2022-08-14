import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sticky from './components/Sticky';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex'>
        <div className='fixed'>
          <Sticky />
        </div>
        <Content />
      </div>


    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './Layouts/Header';
import Sticky from './Layouts/Sticky';
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

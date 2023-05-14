import React from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import List from './components/List';

function App() {
  return (
    <div>
      <Navbar/>
      <Stats/>
      <List/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Navbar/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy} from './urls'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action} from './urls'

function App() {
  return (
   <div className='App'>
    <NavBar/>
    <Banner/>
    <br/>
    <RowPost url={originals} title="Netflix Originals"/>
    <RowPost url={action} title="Action" isSmall/>
   </div>
  );
}

export default App;

import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import './App.css'
import Home from './components/Home';
import { DataProvider } from './components/DataProvider';  

function App() {
  return (
    <DataProvider>
      <div>
        
            <Header />
          
            <Main />
    
      </div>
    </DataProvider>
  );
}

export default App;
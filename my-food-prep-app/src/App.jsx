import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Header from './components/Header';
import GroceryList from './components/GroceryList';

import './index.css';


function App() {
  return (
    <Router>
       <div className="app-container">
      <Header/>
        <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipe/:id' element={<RecipeDetail/>}/>
          <Route path="/grocery/" element={<GroceryList />} />
        </Routes>
        </main>
        </div>
    </Router>
  );
}

export default App;

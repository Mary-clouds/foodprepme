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
          <Route path="/grocery" element={<GroceryList />} />
        </Routes>
        </main>
         <footer style={{ textAlign: 'center', padding: '1rem', color: '#888' }}>
          © 2025 Nevermann
        </footer>
        </div>
    </Router>
  );
}

export default App;

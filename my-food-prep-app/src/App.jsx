import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipe/:id' element={<RecipeDetail/>}/>
        </Routes>
    </Router>
  );
}

export default App;

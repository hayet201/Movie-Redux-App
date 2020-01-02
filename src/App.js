import React from 'react';
import './App.css';
import Search from './component/Search'
import MovieListes from './component/MovieListes'
import MovieDescription from './component/MovieDescription'
import { BrowserRouter as Router, Route } from "react-router-dom";
 

function App() {
  return (
    <div className="App">
     <Router>
      <Route  path ='/' component={Search}/>
      <Route exact  path='/' render={()=><MovieListes/>}/>
      <Route exact path="/Movie-Description" component={MovieDescription}/>
     </Router>

    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


import './pages/homepage/homepage.syles.scss';



function App() {
  return (
    <div> 
    
   <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route  path='/shop' component={ShopPage} />
   </Switch>
   
    </div>
    );
  
}

export default App;

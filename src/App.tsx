import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from './Routes/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <Switch>
     <Route exact path='/' component={MainPage} />
   </Switch>
  )
}

export default App;
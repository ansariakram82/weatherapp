import React from 'react';
import './App.css';
import WeatherApp from './components/Weather/WeatherApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';;


                                                    




function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={WeatherApp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

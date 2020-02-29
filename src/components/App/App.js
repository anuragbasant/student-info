import React from 'react';
// import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Header from '../Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StudentList from '../StudentList';
import StudentForm from '../StudentForm';

function App() {
  // get login user details and pass into header component to show welcome message!!
  return (
    <div className="app">
      <Router>
        <Header userDetails={{'firstName': 'arvind', 'lastName': 'kumar'}} />
        <div className="app-container">
          <Switch>.
            <Route path="/list"><StudentList/></Route>
            <Route path="/"><StudentForm mode="new" /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

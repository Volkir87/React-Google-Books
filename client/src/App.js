import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BookContainer from "./components/BookContainer";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar/>
      <Title/>
      <Search/>
      <BookContainer/>
    </div>
  );
}

export default App;

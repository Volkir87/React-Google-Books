import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BookContainer from "./components/BookContainer";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar/>
      <Title/>
      <SearchBar/>
      <BookContainer/>
    </div>
  );
}

export default App;

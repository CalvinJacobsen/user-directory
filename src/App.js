import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Table />
      </header>
    </div>
  );
}

export default App;

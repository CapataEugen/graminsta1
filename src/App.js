import React from "react";
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

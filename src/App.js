import './App.css';
import Navbar from './Components/Navbar';
import List from './Components/List';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Fav from './Components/Fav';
import { useState, useEffect } from 'react';
import { getLocaleItems } from './Utils/helper';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Export from './Components/Export';
import Import from './Components/Import';
import TodoState from './Components/TodoState';


export default function App() {
  return (
    <>
    <TodoState>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/fav' element={<Fav />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='export' element={<Export />} />
          <Route path='import' element={<Import />} />
        </Routes>
      </Router>
    </TodoState>
    </>
  );
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar"
function App() {
  

  return (
    <>
      <CssBaseline/>
      <Navbar/>
     
     <TodoList/>
     

    </>
  )
}

export default App

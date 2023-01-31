import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PythonOutput from './PythonOutput'
import PythonREPL from './PythonREPL'

const SCRIPT = `
  def func(x, y):
    return [n for n in range(x * y)] if x < 1 else [n for n in range(round(x / y))]

  a = 1
  b = 2
  func(a, b)
`

function App() { 
  return (
    <div className="App">
      
      <h1>Running Python from React!</h1>
      <py-script dangerouslySetInnerHTML={{__html: SCRIPT}}/>
      
    </div>
  )
}

export default App;

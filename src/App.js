import React from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  return (
    <div style={{ width: 'max-content' }}>
      <Table x={4} y={4} id={'1'} saveToLocalStorage={true} />
    </div>
  )
}

export default App

import { useState } from 'react'
import Lboard from './ludoboard'
import TodoList from './todolist'
import Lottery from './lottery'
import Ticket from './ticket'


function App() {
  return (
    <>
      <Ticket ticket={[0,1,3]}/>
    </>
  )
}

export default App

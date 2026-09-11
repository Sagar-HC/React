import { useState } from 'react';
import Search from './search';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Search/>
    </>
  )
}

export default App

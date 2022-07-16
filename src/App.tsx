import { useEffect } from 'react'
import init, { greet } from '@mywasm/foo'

function App() {
  useEffect(() => {
    init()
  }, [])
  return (
    <div className="App">
      
      <button onClick={() => greet()}>Click me</button>
    </div>
  )
}

export default App

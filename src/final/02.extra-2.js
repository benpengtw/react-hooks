// useEffect: persistent state
// 💯 effect dependencies
// http://localhost:3000/isolated/final/02.extra-2.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') ?? initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])
  //[name] 為dependency array，用來控制 useEffect 呼叫時機
  // https://ithelp.ithome.com.tw/articles/10265945



  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

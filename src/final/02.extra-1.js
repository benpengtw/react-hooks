// useEffect: persistent state
// 💯 lazy state initialization
// http://localhost:3000/isolated/final/02.extra-1.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    //lazy state initialization（參數為function）
    //https://medium.com/@xyz030206/%E9%97%9C%E6%96%BC-usestate-%E4%BD%A0%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B-5c8c4cdda82c
    () => window.localStorage.getItem('name') ?? initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

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

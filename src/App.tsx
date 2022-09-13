import "./styles/main.css";
// import { useState } from 'react'

interface Props{
  title?: string;
}

function Button(props: Props) {
  return <button>{props.title}</button>
}

function App() {
  return (
    <div className="w-8 h-8 bg-violet-600 md:bg-red-700">
      <h1>Hello World</h1>
      <br/>
      <Button title="Send"></Button>
      <Button></Button>
    </div>
  )
}

export default App

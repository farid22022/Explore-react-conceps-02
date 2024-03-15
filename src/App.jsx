

import './App.css'
import Counter from './Counter'
import Friends from './Friends'
// import People from './People'
import Peoples from './Peoples'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('Button 2 clicked')
  }
  const addToFive =(num) =>{
    alert(num+5);
  }

  return (
    <>

      <h2>React Core Concepts Part-2</h2>
      <Peoples></Peoples>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() =>{
        alert('third clicked')
      }}>Click Me3</button>

      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App

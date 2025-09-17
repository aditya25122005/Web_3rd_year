import Counter from "./components/Counter";
import Mogambo from "./components/Mogambo";
import Person from "./components/Person";
import {useState} from 'react';

function App(){
  return (
    <div>
      <h1>App</h1>
      <Counter />
      {/* <Person name="Aditya Maheshwari" age={20} color="Blur" />  
      <Person name="Pawan Kumar" age={29} color="green" />
      <Person name="victus" age={1} color="Blue" /> */}
      {/* <Person></Person>
      {Person()} */}
    </div>
    
  )
}

export default App;
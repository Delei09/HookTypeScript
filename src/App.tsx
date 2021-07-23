import React, { useState, useEffect, useMemo, useCallback} from 'react';
import { useRef } from 'react';
import './App.css';


function App() {

  interface Iuser{
    name: string;
    login: string;
    avatar_url :string
  }

  const [users , setUsers] = useState<[Iuser]>()   //<[user]> Para setar uma tipagem de array
  
  const names = useMemo( () => users?.map(user => user.name).join(",") || "" , [users] )

  const inputRef = useRef<HTMLInputElement>(null)    //useReftem que setar como nulo

  const greeting = useCallback( (user : Iuser) => {
    alert(`HEllo ${user.name}`)
  }, [names] )

  async function loadData(){
    const response = await fetch('https://api.github.com/users/delei09')
    const data = await response.json()
    setUsers(data)
  }
  return (
    <div className="App">
        <input type = 'text' ref = {inputRef}  />
    </div>
  );
}

export default App;

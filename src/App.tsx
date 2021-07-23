import React, { useState, useEffect, useMemo} from 'react';
import './App.css';


function App() {

  interface Iuser{
    name: string;
    login: string;
    avatar_url :string
  }

  const [user , setUser] = useState<[Iuser]>()   //<[user]> Para setar uma tipagem de array
  
  const names = user

  async function loadData(){
    const response = await fetch('https://api.github.com/users/delei09')
    const data = await response.json()
    setUser(data)
  }
  return (
    <div className="App">
        {user?.name}
    </div>
  );
}

export default App;

import React, { useContext, useState } from 'react'



export default function ComponentA() {
    const userContext = useContext();

    const [name, setName] = useState("WORLD");

  return (
    <userContext.Provider value={name}>
            <div>Hello {name}</div>
    </userContext.Provider>
  )
}

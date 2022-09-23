import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=> props.greetFunction('CHILD')}>Invoke Parent Function</button>
    </div>
  )
}
export default Child

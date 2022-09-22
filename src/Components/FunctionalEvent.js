import React from 'react'

 function FunctionalEvent() {
    const handleChange = () => {
        console.log('clicked')
    }
  return (
    <div><button onClick = {handleChange}>Click Me</button></div>
  )
}
export default FunctionalEvent

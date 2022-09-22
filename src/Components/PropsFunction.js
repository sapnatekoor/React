import React from 'react'

export default function PropsFunction(props) {
  return (
    <div><p>My name is {props.name}</p>
    {props.children}</div>
  )
}

import React from 'react'

export default function ComponentWithoutJSX() {
  return (
    React.createElement('div',null , React.createElement('h1' , null , 'Hello World'))
  )
}

import React from 'react'

function TextError (props){
  return <small style={{color: 'red', fontSize: 14, fontFamily: "'Open Sans', sans-serif"}}>{props.children}</small>
} 

export default TextError;
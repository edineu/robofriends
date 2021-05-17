import React from 'react'

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '2px solid green',
        height: '600px',
      }}
    >
      {props.children}
    </div>
  )
}

export default Scroll

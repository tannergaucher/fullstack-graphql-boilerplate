import React from 'react'

export default function button(props) {
  return (
    <button
      style={{
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderRadius: '4px',
        border: '1px solid black',
      }}
      {...props}
    />
  )
}

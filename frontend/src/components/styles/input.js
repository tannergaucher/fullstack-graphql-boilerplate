import React from 'react'

export default function input(props) {
  return (
    <input
      style={{
        border: '.1rem solid var(--light-4)',
        borderRadius: '2px',
        marginTop: '.5rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        width: 'calc(100% - 4px)',
      }}
      {...props}
    />
  )
}

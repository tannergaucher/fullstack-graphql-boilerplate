import React from 'react'

export default function fieldset({ children }) {
  return (
    <fieldset
      style={{
        display: 'flex',
        border: '',
        borderRadius: '2px',
      }}
    >
      {children}
    </fieldset>
  )
}

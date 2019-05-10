import React from 'react'

export default function fieldset({ children }) {
  return (
    <fieldset
      style={{
        display: 'flex',
        border: '2px solid var(--light-2)',
        borderRadius: '2px',
      }}
    >
      {children}
    </fieldset>
  )
}

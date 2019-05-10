import React from 'react'
import { Link } from '@reach/router'

export default function footer() {
  return (
    <footer style={{ padding: '1rem', background: 'var(--light-2)' }}>
      <Link to="/">Site Title</Link>
    </footer>
  )
}

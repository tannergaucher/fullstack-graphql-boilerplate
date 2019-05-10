import React from 'react'
import { Link } from '@reach/router'

export default function index() {
  return (
    <div>
      <h1>Index Page</h1>
      <br />
      <Link to="/profile">Profile Page</Link>
    </div>
  )
}

import React from 'react'

import Signup from '../containers/signup'
import Login from '../containers/login'

export default function Auth() {
  return (
    <div style={{ padding: '1rem' }}>
      <Login />
      <Signup />
    </div>
  )
}

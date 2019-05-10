import React from 'react'
import { Query } from 'react-apollo'
import { Router } from '@reach/router'

import IndexPage from '../pages/index'
import Login from '../pages/login'
import ProfilePage from '../pages/profile'

import { IS_LOGGED_IN } from '../apollo/graphql'

export default function Main() {
  return (
    <div style={{ padding: '1rem' }}>
      <Query query={IS_LOGGED_IN}>
        {/* NOT WOIKING */}
        {({ data }) => <>{data.isLoggedIn ? <ProtectedRoutes /> : <Login />}</>}
      </Query>
    </div>
  )
}

const ProtectedRoutes = () => (
  <Router>
    <IndexPage path="/" />
    <ProfilePage path="/profile" />
  </Router>
)

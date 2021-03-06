import React from 'react'
import { Link } from '@reach/router'
import { Query } from 'react-apollo'

import Logout from '../containers/logout'
import ToggleTheme from '../containers/toggleTheme'
import { IS_LOGGED_IN } from '../apollo/graphql'

export default function header() {
  return (
    <header
      style={{
        padding: '1rem',
        background: '',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to="/">Site Title</Link>
      <ToggleTheme />
      <ToggleLogout />
    </header>
  )
}

function ToggleLogout() {
  return (
    <Query query={IS_LOGGED_IN}>
      {({ data, loading }) => {
        if (loading) return <p>loading...</p>

        return data.isLoggedIn ? <Logout /> : null
      }}
    </Query>
  )
}

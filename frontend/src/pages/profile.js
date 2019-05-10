import React from 'react'
import { Link } from '@reach/router'
import { Query } from 'react-apollo'

import { CURRENT_USER_QUERY } from '../apollo/graphql'

export default function profile() {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return <p>loading</p>

        return (
          <>
            <h1>Profile Page</h1>
            <h2>Hey, {data.me.name} 👋</h2>
            <h4>{data.me.email}</h4>
            <br />
            <Link to="/">Index Page</Link>
          </>
        )
      }}
    </Query>
  )
}

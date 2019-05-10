import React from 'react'
import { ApolloConsumer } from 'react-apollo'

import Button from '../components/styles/button'

export default function logout() {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          onClick={() => {
            client.resetStore()
            localStorage.clear()
          }}
        >
          Logout
        </Button>
      )}
    </ApolloConsumer>
  )
}

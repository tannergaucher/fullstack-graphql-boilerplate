import React from 'react'
import Button from '../components/styles/button'
import { Query } from 'react-apollo'
import { ApolloConsumer } from 'react-apollo'

import { GET_USER_THEME } from '../apollo/graphql'

export default function toggleTheme() {
  return (
    <Query query={GET_USER_THEME}>
      {({ data }) => <>{data.userTheme ? <Light /> : <Dark />}</>}
    </Query>
  )
}

function Dark() {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          onClick={() => {
            client.writeData({ data: { userTheme: 'dark-theme' } })
            localStorage.setItem('theme', 'dark-theme')
          }}
        >
          Dark
        </Button>
      )}
    </ApolloConsumer>
  )
}

function Light() {
  return (
    <ApolloConsumer>
      {client => (
        <Button
          onClick={() => {
            client.writeData({ data: { userTheme: '' } })
            localStorage.setItem('theme', '')
          }}
        >
          Light
        </Button>
      )}
    </ApolloConsumer>
  )
}

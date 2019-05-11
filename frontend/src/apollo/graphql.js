import gql from 'graphql-tag'

export const IS_LOGGED_IN = gql`
  query IS_LOGGED_IN {
    isLoggedIn @client
  }
`

export const GET_USER_THEME = gql`
  query GET_USER_THEME {
    userTheme @client
  }
`

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      name
      email
    }
  }
`

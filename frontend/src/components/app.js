import React, { useEffect } from 'react'
import { ApolloProvider, Query } from 'react-apollo'

import { client } from '../apollo/client'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import { GET_USER_THEME } from '../apollo/graphql'

function MyApp() {
  return (
    <ApolloProvider client={client}>
      <Query query={GET_USER_THEME}>
        {({ data }) => (
          <App userTheme={data.userTheme}>
            <Header />
            <Main />
            <Footer />
          </App>
        )}
      </Query>
    </ApolloProvider>
  )
}

export default MyApp

// use effect to add class to body
//https://stackoverflow.com/questions/47706903/add-a-class-to-the-html-body-tag-with-react

// not dynamic for new

function App({ children, userTheme }) {
  const addDarkClass = () => document.body.classList.add('dark-theme')
  const removeDarkClass = () => document.body.classList.remove('dark-theme')

  useEffect(() => {
    userTheme === 'dark-theme' ? addDarkClass() : removeDarkClass()
    // re-runs when theme changes
  }, [userTheme])

  return (
    <div
      // className={`${theme}`} adding class doesn't work here because it's child of body element. need to target body
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  )
}

import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { client } from '../apollo/client'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

// QUERY LOCALSTORAGE FOR THEME
// IF THEME, SET APP CLASSNAME TO THEME

function App() {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default App

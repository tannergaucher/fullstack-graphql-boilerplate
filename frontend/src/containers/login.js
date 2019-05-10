import React, { useState } from 'react'
import { Mutation, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { navigate } from '@reach/router'

import Fieldset from '../components/styles/fieldset'
import Input from '../components/styles/input'
import Button from '../components/styles/button'

const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <ApolloConsumer>
        {client => (
          <Mutation mutation={LOG_IN_MUTATION} variables={values}>
            {(login, { loading, error }) => (
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault()
                  console.log('submit login')
                  const res = await login()
                  client.writeData({ data: { isLoggedIn: true } })
                  localStorage.setItem('token', res.data.login.token)
                  setValues({ email: '', password: '' })
                  navigate(`/`)
                }}
              >
                <Fieldset disabled={loading}>
                  <h2>Log in to your accout</h2>
                  {/* handle error here */}
                  <label htmlFor="email">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </label>

                  <label htmlFor="password">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </label>
                  <Button type="submit" disabled={loading}>
                    Login
                  </Button>
                </Fieldset>
              </form>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </div>
  )
}

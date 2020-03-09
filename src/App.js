import React from 'react'
import Nav from './components/Nav'
import './App.css'
import { Container } from './components/Shared/Container/Container'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <main>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.isExact}
              />
            ))}
            <Redirect from='*' to='/404' />
          </Switch>
        </main>
        <footer>Footer</footer>
      </Container>
    </BrowserRouter>
  )
}

export default App

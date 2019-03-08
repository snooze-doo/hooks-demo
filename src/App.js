import React from "react";
import './App.scss'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Form from './components/Form/Form';
import FuncForm from './components/FunctionalForm/FunctionalForm';

function Index() {
  return <h2>Home</h2>;
}

const demos = [
  {
    key: 0,
    name: 'Form',
    route: 'form',
    component: Form,
  },
  {
    key: 1,
    name: 'Form (func)',
    route: 'funcform',
    component: FuncForm,
  }
]

const Nav = withRouter(({ location }) => {
  return (
    <nav className='nav'>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        {
          demos.map(e => {
            const route = `/${e.route}/`
            return (
              <li key={e.key} className={location.pathname === route ? 'active' : ''}>
                <Link to={route}>{e.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
})

function App({ location }) {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <div className='content'>
          <Route path="/" exact component={Index} />
          {demos.map(e => {
            const route = `/${e.route}/`
            return <Route exact key={e.key} path={route} component={e.component} />
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
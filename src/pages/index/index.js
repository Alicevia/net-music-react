import React, { memo } from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'
import './index.css'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const App = memo(function () {
  return (
    <HashRouter>
      <AppHeader></AppHeader>
      {renderRoutes(routes)}
      <AppFooter></AppFooter>
    </HashRouter>
  )
})
if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))


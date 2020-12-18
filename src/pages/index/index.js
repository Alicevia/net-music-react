import React, { memo, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './router'
import './index.css'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import store from './store'

const App = memo(function () {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter></AppFooter>
      </HashRouter>
    </Provider>
  )
})
if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))


import React, { lazy, Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Menu from './Menu'
import Header from './Header'
import { MainProvider } from 'containers/Main/Context'
import { CategoryProvider } from 'containers/Category/Context'
import { CounterProvider } from 'containers/Counter/Context'
import { DataProvider } from 'containers/Data/Context'

const Category = lazy(() => import('containers/Category'))
const Main = lazy(() => import('containers/Main'))
const Settings = lazy(() => import('containers/Settings'))
const Stats = lazy(() => import('containers/Stats'))

const Layout = () => (
  <div id="outer-container">
    <ToastContainer autoClose={3000} />
    <Menu />
    <Header />
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <main id="page-wrap">
          <div className="container">
            <DataProvider>
              <CounterProvider>
                <CategoryProvider>
                  <MainProvider>
                    <Route component={Main} exact path="/" />
                  </MainProvider>
                  <Route component={Category} path="/category" />
                </CategoryProvider>
                <Route component={Settings} path="/settings" />
                <Route component={Stats} path="/stats" />
              </CounterProvider>
            </DataProvider>
          </div>
        </main>
      </Suspense>
    </Switch>
  </div>
)

export default withRouter(Layout)

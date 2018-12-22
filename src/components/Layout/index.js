import React, { lazy, Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Menu from './Menu'
import Header from './Header'
import { FormProvider } from 'containers/Form/Context'
import { CategoryProvider } from '../../containers/Category/Context'

const Category = lazy(() => import('containers/Category'))
const Form = lazy(() => import('containers/Form'))
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
            <CategoryProvider>
              <FormProvider>
                <Route component={Form} exact path="/" />
              </FormProvider>
              <Route component={Category} path="/category" />
            </CategoryProvider>
            <Route component={Settings} path="/settings" />
            <Route component={Stats} path="/stats" />
          </div>
        </main>
      </Suspense>
    </Switch>
  </div>
)

export default withRouter(Layout)

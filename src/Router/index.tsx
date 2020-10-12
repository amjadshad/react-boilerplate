import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import BrandedPageEditor from '../pages/BrandedPageEditor'
import { MainLayout } from '../Layouts/MainLayout'
import { BrandedPageDisplay } from '../pages/BrandedPageDisplay'
import { Home } from '../pages/Home'
import { PATHS } from '../constants'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Route exact path={PATHS.home}>
      <MainLayout>
        <Home />
      </MainLayout>
    </Route>

    <Route exact path={PATHS.brandedPageDisplay}>
      <MainLayout>
        <BrandedPageDisplay />
      </MainLayout>
    </Route>

    <Route exact path={PATHS.brandedPageEditor}>
      <MainLayout strict={false}>
        <BrandedPageEditor />
      </MainLayout>
    </Route>
  </BrowserRouter>
)

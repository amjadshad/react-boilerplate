import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import BrandedPageEditor from '../pages/BrandedPageEditor'
import { MainLayout } from '../Layouts/MainLayout'
import { BrandedPageDisplay } from '../pages/BrandedPageDisplay'
import { Home } from '../pages/Home'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/">
      <MainLayout>
        <Home />
      </MainLayout>
    </Route>

    <Route exact path="/branded-page">
      <MainLayout>
        <BrandedPageDisplay />
      </MainLayout>
    </Route>

    <Route exact path="/branded-page-edit">
      <MainLayout strict={false}>
        <BrandedPageEditor />
      </MainLayout>
    </Route>
  </BrowserRouter>
)

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import BrandedPageEditor from '../pages/BrandedPageEditor'
import { MainLayout } from '../Layouts/MainLayout'
import { BrandedPageDisplay } from '../pages/BrandedPageDisplay'
import { Home } from '../pages/Home'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Route path="/">
      <MainLayout>
        <Home />
      </MainLayout>
    </Route>

    <Route path="/branded-page-display">
      <MainLayout>
        <BrandedPageDisplay />
      </MainLayout>
    </Route>

    <Route path="/branded-page-edit">
      <MainLayout>
        <BrandedPageEditor />
      </MainLayout>
    </Route>
  </BrowserRouter>
)

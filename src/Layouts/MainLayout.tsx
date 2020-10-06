import React from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface Props {
  strict?: boolean
}

// Using non-strict variant so react-email-editor doesn't break
export const MainLayout: React.FC<Props> = (props) => {
  return props.strict ? (
    <React.StrictMode>
      <Header />
      {props.children}
      <Footer />
    </React.StrictMode>
  ) : (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

MainLayout.defaultProps = {
  strict: true
}

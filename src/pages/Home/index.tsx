import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = (props) => {
  return (
    <>
      <Link to="/branded-page-edit">Go to editor</Link>
    </>
  )
}

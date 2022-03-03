import React from 'react'
import {Outlet} from 'react-router-dom'

export default function InnerContent() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

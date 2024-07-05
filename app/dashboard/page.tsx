import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = () => {


  const {userId} = auth()


  if(!userId) redirect('/sign-in')

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
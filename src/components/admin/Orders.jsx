import React from 'react'
import Sidebar from './Sidebar'

const Orders = ({url}) => {
  const url = url;
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <div className="w-64 ">
        <Sidebar />
      </div>
      <div>
        hello 3
      </div>
    </div>
  )
}

export default Orders


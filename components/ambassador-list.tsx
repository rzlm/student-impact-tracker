import React from 'react'
import EmployeeCard from './employee-card'
import type { Ambassador } from '@/lib/types'

const list:Ambassador[] = [
  {
    firstName: "John",
    lastName: "Doe",
   points: "100"
  },
  {
    firstName: "John",
    lastName: "Doe",
   points: "200"
  },
  {
    firstName: "John",
    lastName: "Doe",
   points: "300"
  }
]

// const AmbassadorList = ( ambassadorList: Ambassador[] ) => {
  const AmbassadorList = () => {

  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      {list.map((ambassador, key) => (
        <EmployeeCard key={key} {...ambassador} />
      ))}
    </div>
  )
}

export default AmbassadorList
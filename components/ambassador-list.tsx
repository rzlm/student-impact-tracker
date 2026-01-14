import React from 'react'
import EmployeeCard from './employee-card'
import type { Ambassador } from '@/lib/types'

type AmbassadorListProps = {
  ambassadors: Ambassador[]
}

const AmbassadorList = ({ ambassadors }: AmbassadorListProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {(ambassadors ?? []).map((ambassador, index) => (
        <EmployeeCard key={index} {...ambassador}  />
      ))}
    </div>
  )
}

export default AmbassadorList
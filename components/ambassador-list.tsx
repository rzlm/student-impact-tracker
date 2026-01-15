import React from 'react'
import EmployeeCard from './employee-card'
import type { Ambassador } from '@/lib/types'

type AmbassadorListProps = {
  ambassadors: Ambassador[]
  onDelete: (id: number) => void;
  onPointsUpdate: (id: number, newPoints: number) => void;
  
}

const AmbassadorList = ({ ambassadors, onDelete, onPointsUpdate }: AmbassadorListProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {ambassadors.length > 0 ? (ambassadors ).map((ambassador, index) => (
        <EmployeeCard key={index} {...ambassador} onDelete={onDelete} onPointsUpdate={onPointsUpdate}  />
      )): (
        <div className='w-full bg-gray-50 h-60 rounded-md m-8 flex items-center justify-center text-lg text-gray-500'>
          No ambassadors have been added yet
        </div>
      )
    
    }
    </div>
  )
}

export default AmbassadorList
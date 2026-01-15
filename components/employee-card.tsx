"use client"
import React, { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import type { Ambassador } from '@/lib/types'
import { TrophyIcon } from 'lucide-react'
import { Button } from './ui/button'
import { EllipsisVertical } from 'lucide-react'
// import { getPointsById } from '@/actions'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import AwardPointsButton from "@/components/award-points-button"
import { deleteAmbassador } from '@/lib/supabase/actions'
import { toast } from "sonner"
import { AlertDialog } from './ui/alert-dialog'

type EmployeeCardProps = Ambassador & {
  onDelete?: (id: number) => void
  onPointsUpdate?: (id: number, newPoints: number) => void;
}

const EmployeeCard = ({
  id,
  first_name,
  last_name,
  role,
  points,
  onDelete,
  onPointsUpdate
  
}: EmployeeCardProps) => {

  const handleDelete = async () => {
    const res = await deleteAmbassador(id);
    onDelete?.(id);

    if (res) {
      toast("Ambassador has been deleted");
    }
  };

 // const [points, setPoints] = useState(0)


// useEffect(() => {
//     async function getPoints() {
//         const res = await getPointsById(id);
//         if (res) {
//             setPoints(res);
//             console.log("d", res)
//         }
//     }
    
//     getPoints();
    
// }, []); 

  return (
    <Card className="relative w-full max-w-4xl  rounded-lg max-h-48 border-1 border-primary shadow-lg  shadow-gray-200 ">
      <div className="" />
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-2xl font-bold text-primary">
            {first_name || 'John'} {last_name || 'Doe'}
          </CardTitle>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="p-3 bg-primary rounded-full w-fit">
              <TrophyIcon className="w-5 h-5 text-amber-400" />
            </div>
            <p className=" font-semibold text-lg text-primary">{points}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 text-md">
                <DropdownMenuLabel className="text-md">
                  Edit
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="text-md text-red-600">
                  Delete
                  <AlertDialog>
                    
                  </AlertDialog>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardDescription className="text-gray-500 text-lg">
          {role}
        </CardDescription>
      </CardHeader>

      <div className="flex px-4 pb-4 self-end">
        <AwardPointsButton employeeId={id}  currentPoints={points} onPointsUpdate={onPointsUpdate}  />
      </div>
    </Card>
  )
}


export default EmployeeCard
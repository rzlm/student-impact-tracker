"use client"
import React from 'react'
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import AwardPointsButton from "@/components/award-points-button"

type EmployeeCardProps = Ambassador & {
  onDelete?: () => void
}

const EmployeeCard = ({
  first_name,
  last_name,
  role,
  onDelete,
}: EmployeeCardProps) => {
  return (
    <Card className="relative w-full max-w-4xl overflow-hidden">
      <div className="" />
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-2xl font-bold">
            {first_name || 'John'} {last_name || 'Doe'}
          </CardTitle>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="p-3 bg-indigo-400 rounded-full w-fit">
              {/* @ts-expect-error - React 19 type compatibility issue with lucide-react */}
              <TrophyIcon className="w-5 h-5 text-white" />
            </div>
            <p className="text-black font-semibold text-lg">100</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {/* @ts-expect-error - React 19 type compatibility issue with lucide-react */}
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 text-md">
                <DropdownMenuLabel className="text-md">
                  Edit
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={onDelete}
                  className="text-md text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardDescription className="text-gray-500 text-lg">
         {role}
        </CardDescription>
      </CardHeader>

      <div className="flex p-4 items-left">
        <AwardPointsButton />
      </div>
    </Card>
  )
}

export default EmployeeCard
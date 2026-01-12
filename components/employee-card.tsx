"use client"
import React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card"
import { Ambassador } from '@/lib/types'
import { TrophyIcon } from 'lucide-react'
import { Button } from './ui/button'
import { EllipsisVertical } from 'lucide-react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu'

const EmployeeCard = (ambassador:Ambassador, onDelete ) => {

  return (
    <Card className="relative w-full max-w-4xl overflow-hidden   ">
        <div className=" " />
        <CardHeader>
        <div className='flex flex-row justify-between'>
          <CardTitle className='text-2xl font-bold'>{ambassador.firstName || 'John '} {ambassador.lastName || 'Doe'}</CardTitle>
          <div className='flex flex-row items-center justify-center gap-2  '>
           <div className='p-3  bg-indigo-400 rounded-full w-fit'>
          {/* @ts-expect-error */}
          <TrophyIcon className='w-5 h-5 text-white ' />
           </div>
            <p className='text-black font-semibold text-lg'>100 </p>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
            <EllipsisVertical/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-md">
        <DropdownMenuLabel className="text-md"> Edit </DropdownMenuLabel>
        <DropdownMenuLabel onClick={() => onDelete(id)} className='text-md text-red-600 ' > Delete</DropdownMenuLabel>

      </DropdownMenuContent>
    </DropdownMenu>
        </div>
        </div>
          <CardDescription className='text-gray-500 text-lg '>
            Student Ambassador
          </CardDescription>
        </CardHeader>

        <div className='flex p-4 items-left'>
            <Button className='hover:cursor-pointer rounded-lg px-4'>
                Award Points
            </Button>
        </div>
      </Card>
)
}

export default EmployeeCard;
"use client"
import React, { useState } from 'react'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import { Button } from './ui/button'
import { FieldGroup, FieldLabel, Field } from './ui/field'
import { Input } from './ui/input'
import { Plus } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
const AwardPointsButton = () => {
    const [points, setPoints] = useState(0)
    const [additionalPoints, setAdditionalPoints] = useState(false)
 

  return (
        <Dialog>
    <DialogTrigger asChild>
      <Button size="lg">
        Award Points
      </Button>
    </DialogTrigger>
    <DialogContent className="w-full max-w-2xl">
  <DialogTitle>Award Points</DialogTitle>

  <form>
    <h1 className="pb-4">Select points</h1>
<p className='text-sm py-2'>John currently has 100 points</p>
    <div className="grid grid-cols-4 gap-2">
      <Button
      onClick={(e) => { e.preventDefault(); setPoints(points + 1); }}  variant="outline" className='rounded-md text-sm p-4 hover:bg-primary hover:text-white'>Event</Button>
      <Button onClick={(e) => { e.preventDefault(); setPoints(points + 5); }} variant="outline" className='rounded-sm text-sm p-4 hover:bg-primary hover:text-white'>General Member</Button>
      <Button onClick={(e) => { e.preventDefault(); setPoints(points + 15); }} variant="outline" className='text-sm rounded-md p-4 hover:bg-primary hover:text-white' >Entrepreneur</Button>
      <Button onClick={(e) => { e.preventDefault(); setPoints(points + 0); setAdditionalPoints(!additionalPoints) }} variant="outline" className='rounded-sm text-sm p-4 hover:bg-primary hover:text-white'>Custom amount</Button>
    </div>
    <div className='pt-4'>
       { additionalPoints && <Input
        placeholder='100'
        className='min-w-3 rounded-sm'
        name="additionalPoints"

        onChange={(e) => {
          const value = parseInt(e.target.value) || 0;
          setPoints(points + value);
        }}
        />
       }
    </div>
    <h1 className="text-xl py-4">{points} points</h1>

    <FieldGroup>
      <Field orientation="horizontal">
        <DialogClose asChild>
        <Button variant="outline" type="button"   > 
          Cancel
        </Button>
        </DialogClose>
       
        <Button type="submit">
          Award {points} points
        </Button>
      </Field>
    </FieldGroup>
  </form>
</DialogContent>
  </Dialog>
  )
}

export default AwardPointsButton
"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react'
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const AddAmbassadorButton = () => {
   
    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        points: ""
    })

    console.log(formInfo)

    const handleSubmit = () => {
        //push to list
        
        //add to db here
    }

  return (

    <div className='p-4'>
         <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="lg">
                {/* @ts-expect-error - */}
                <Plus className="w-4 h-4" />
                Add ambassador
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">

            <AlertDialogTitle>Add a New Ambassador</AlertDialogTitle>
             
            <form>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                  <Input
                    id="first-name"
                    placeholder="First name"
                    value={formInfo.firstName}
                    onChange={(e) =>  setFormInfo({...formInfo, firstName: e.target.value} ) }
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                  <Input
                    id="last-name"
                    placeholder="Last name"
                    value={formInfo.lastName}
                    onChange={(e) => setFormInfo({...formInfo, lastName: e.target.value})}
                    required
                  />
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="points">Points</FieldLabel>
                  <Input
                   type='number'
                    id="initial-points"
                    placeholder="Points"
                    value={formInfo.points}
                    onChange={(e) => setFormInfo({...formInfo, points: e.target.value})} 
                    required
                  />
                </Field>
              </div>
          
              <Field orientation="horizontal">
              <AlertDialogCancel variant="outline" type="button">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction type="submit">Submit</AlertDialogAction>
              </Field>
            </FieldGroup>
          </form>
            </AlertDialogContent>
          </AlertDialog>

          </div>
  )
}

export default AddAmbassadorButton
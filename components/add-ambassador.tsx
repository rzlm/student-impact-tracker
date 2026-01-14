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
import { createAmbassador } from '@/actions'
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { toast } from "sonner"
import { Ambassador } from '@/lib/types'

interface AddAmbassadorButtonProps {
    onAmbassadorAdded: (ambassador:any)=> void
}

const AddAmbassadorButton = ({ onAmbassadorAdded }: AddAmbassadorButtonProps) => {
   
    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        role: ""
    })

    console.log(formInfo)

    const handleSubmit = async () => {
        //push to list

        //add to db here
      const ambassador = await  createAmbassador(formInfo);
     if (ambassador) {
        toast("Ambassador has been created")
        onAmbassadorAdded(formInfo)

     } else {
        toast("An error has occurred")
     }

    
    }

  return (

    <div className='p-4'>
         <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="lg">
                <Plus className="w-4 h-4" />
                Add ambassador
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">

            <AlertDialogTitle>Add a New Ambassador</AlertDialogTitle>
             
            <form >
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                  <Input
                    id="first-name"
                    placeholder="First name"
                    value={formInfo.first_name}
                    onChange={(e) =>  setFormInfo({...formInfo, first_name: e.target.value} ) }
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                  <Input
                    id="last-name"
                    placeholder="Last name"
                    value={formInfo.last_name}
                    onChange={(e) => setFormInfo({...formInfo, last_name: e.target.value})}
                    required
                  />
                </Field>
                
              </div>

              <Field>
                  <FieldLabel htmlFor="points">Role</FieldLabel>
                  <Input
                   type='role'
                    id="role"
                    placeholder="ex. Social Media"
                    value={formInfo.role}
                    onChange={(e) => setFormInfo({...formInfo, role: e.target.value})} 
                    required
                  />
                </Field>
          
              <Field orientation="horizontal">
              <AlertDialogCancel variant="outline" type="button">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction  type="submit" formAction={handleSubmit}>
                        Submit
                </AlertDialogAction>
                    
              </Field>
            </FieldGroup>
          </form>
            </AlertDialogContent>
          </AlertDialog>

          </div>
  )
}

export default AddAmbassadorButton
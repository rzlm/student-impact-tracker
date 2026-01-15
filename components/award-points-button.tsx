"use client"
import React, { useState } from 'react'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import { Button } from './ui/button'
import { FieldGroup, FieldLabel, Field } from './ui/field'
import { Input } from './ui/input'
import { Plus } from 'lucide-react'
import {Minus} from 'lucide-react'
import { addPointsById } from '@/lib/supabase/actions'
import {toast} from "sonner"
import {
    Dialog,
    DialogContent,
    // DialogDescription,
    // DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
interface AwardPointsButtonProps  {
    employeeId: number
    currentPoints: number;
    onPointsUpdate?: (id: number, newPoints: number) => void; 
}

const AwardPointsButton: React.FC<AwardPointsButtonProps> = ({ employeeId, currentPoints, onPointsUpdate }) => {
    const [points, setPoints] = useState(0)
    const [additionalPoints, setAdditionalPoints] = useState(false)
    const [pointInfo, setPointInfo] = useState(
       {
        numEvents: 0,
        numEntrepreneurs: 0,
        numLabMembers: 0,
        numConsultingMembers: 0
       }
    )

    async function handleInsertPoints() {
        const res = await addPointsById(employeeId, points)
        toast("Successfully Added points!")
       
        onPointsUpdate?.(employeeId, currentPoints + points);
        

    }


  

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
    <div className="flex flex-col gap-2">
      <div className='w-full rounded-md outline-1 bg-gray-100 flex flex-row  gap-4 justify-between  text-sm p-3'>
        <div>Event</div>

       <div className="flex flex-row gap-2">
            <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'   onClick={(e) => { e.preventDefault(); points > 0 ? setPoints(points - 1): null;  pointInfo.numEvents > 0 ? setPointInfo({...pointInfo, numEvents: pointInfo.numEvents =  pointInfo.numEvents - 1  }): null ; }}   >
            <Minus className='w-4 h-4' />
            </div>
      <p> {pointInfo.numEvents}</p>
        <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'  onClick={(e) => { e.preventDefault(); setPoints(points + 1);  setPointInfo({...pointInfo, numEvents: pointInfo.numEvents =  pointInfo.numEvents + 1  }) ; console.log(pointInfo.numEvents) }}  >
            <Plus  className='w-4 h-4' />
            </div>
       </div>
      </div>

      <div className='w-full rounded-md outline-1 bg-gray-100 flex flex-row  gap-4 justify-between  text-sm p-3'>
        <div>General Member (StartUp Lab)</div>

       <div className="flex flex-row gap-2">
            <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'  onClick={(e) => { e.preventDefault(); points > 0 ? setPoints(points - 5): null;  pointInfo.numLabMembers > 0? setPointInfo({...pointInfo, numLabMembers: pointInfo.numLabMembers =  pointInfo.numLabMembers - 1  }): null ; }}  >
            <Minus className='w-4 h-4' />
            </div>
      <p>{pointInfo.numLabMembers}</p>
        <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'  onClick={(e) => { e.preventDefault(); setPoints(points + 5);  setPointInfo({...pointInfo, numLabMembers: pointInfo.numLabMembers =  pointInfo.numLabMembers +1  }) ; }}  >
            <Plus  className='w-4 h-4' />
            </div>
       </div>
      </div>

      <div className='w-full rounded-md outline-1 bg-gray-100 flex flex-row  gap-4 justify-between  text-sm p-3'>
        <div>General Member (Consulting program) </div>

       <div className="flex flex-row gap-2">
            <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'   onClick={(e) => { e.preventDefault(); points > 0 ? setPoints(points - 5): null; pointInfo.numConsultingMembers > 0 ? setPointInfo({...pointInfo, numConsultingMembers: pointInfo.numConsultingMembers =  pointInfo.numConsultingMembers - 1  }): null ; }}   >
            <Minus className='w-4 h-4' />
            </div>
      <p>{pointInfo.numConsultingMembers}</p>
        <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'  onClick={(e) => { e.preventDefault(); setPoints(points + 5);  setPointInfo({...pointInfo, numConsultingMembers: pointInfo.numConsultingMembers =  pointInfo.numConsultingMembers +1  }) ;  }}  >
            <Plus  className='w-4 h-4' />
            </div>
       </div>
      </div>
       <div className='w-full rounded-md outline-1 bg-gray-100 flex flex-row  gap-4 justify-between  text-sm p-3'>
        <div>Entrepreneur</div>

       <div className="flex flex-row gap-2">
            <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'  onClick={(e) => { e.preventDefault(); points > 0 ? setPoints(points - 15): null;  pointInfo.numEntrepreneurs > 0? setPointInfo({...pointInfo, numEntrepreneurs: pointInfo.numEntrepreneurs =  pointInfo.numEntrepreneurs - 1  }): null ; }}  >
            <Minus className='w-4 h-4' />
            </div>
      <p>{pointInfo.numEntrepreneurs}</p>
        <div className='p-1 bg-gray-50 rounded-full  hover:bg-primary hover:text-white'  onClick={(e) => { e.preventDefault(); setPoints(points + 15);  setPointInfo({...pointInfo, numEntrepreneurs: pointInfo.numEntrepreneurs =  pointInfo.numEntrepreneurs +1  }) ; }}  >
            <Plus  className='w-4 h-4' />
            </div>
       </div>
      </div>

      <Button onClick={(e) => { e.preventDefault(); setPoints(points + 0); setAdditionalPoints(!additionalPoints) }} variant="outline" className='rounded-sm text-sm p-4 hover:bg-primary hover:text-white'>Custom amount</Button>
    </div>
    <div className='pt-4'>
       { additionalPoints && <Input
        placeholder='100'
        className='min-w-3 rounded-sm'
        name="additionalPoints"

        onChange={(e) => {
          const value = parseInt(e.target.value) || 0;
          if (value < 0) {
            if(points > 0 ) {
                setPoints(points + value);
            }
          } else{
            setPoints(points + value);
          }
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
        <Button type="submit" formAction={handleInsertPoints}>
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
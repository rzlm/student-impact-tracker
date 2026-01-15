'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Ambassador } from '@/lib/types'
import {createClient} from "./server"

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Signup error:', error.message, error.status)
    throw error
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

 export async function signOut() {
   const supabase = await createClient()

    const { error } = await supabase.auth.signOut()
    if(error) {
      console.log(error)
    }
    redirect("/login")
  }

export async function createAmbassador( ambassador:any ) {
const supabase = await createClient()
 const {data, error } = await supabase
  .from('ambassadors')
  .insert({ first_name: ambassador.first_name, last_name: ambassador.last_name, role:ambassador.role, points:0  }) 
  .select()
if (error) {
     console.log("An error occurred", error)
} else {
    console.log("successful")
}
  return data;

}

export async function deleteAmbassador(ambassadorId:number) {
  const supabase = await createClient()
  // Delete all entries in the points table first
  // const { error: pointsError } = await supabase
  //   .from('points')
  //   .delete()
  //   .eq('ambassador_id', ambassadorId )

  // if (pointsError) {
  //   console.log("An error occurred (deleting points):", pointsError)
  //   return false; 
  // }

  // Delete ambassador
  const { error: ambassadorError } = await supabase
    .from('ambassadors')
    .delete() 
    .eq('id', ambassadorId)

  if (ambassadorError) {
    console.log("An error occurred (deleting ambassador):", ambassadorError)
    return false;
  } else {
    console.log("successful")
    return true;
  }
}
//fetch all ambasadords

export async function getAllAmbassadors() {
  
  const supabase = await createClient()
  const { data, error } = await supabase
  .from('ambassadors')
  .select()
  if (error) {
      console.log("An error occurred", error)
  } else {
    console.log("successful")
  }
  console.log(data)
  return data;

}
// export async function updateAmbassador(ambassador: Ambassador) {
//     const supabase = await createClient()

//     const { data, error } = await supabase
// .from('ambassadors')
//   .delete({ first_name: ambassador.firstName, last_name: ambassador.lastName, role:ambassador.role  }) 
// if (error) {
//      console.log("An error occurred", error)
// } else {
//     console.log("successful")
// }
//   return data;
// }


//Add points
export async function addPointsById(id: number, points: number) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('ambassadors')
    .update({ points })
    .eq('id', id)

  if (error) {
    console.error("An error has occurred", error)
  }
}

export async function getTotalAmbassadorPoints() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('ambassadors')
    .select('points', { count: 'exact' })

  if (error) {
    console.error("Error fetching points:", error)
    return 0
  }

  return data.reduce((total, row) => total + (row.points ?? 0), 0)
}


//fetch points

// export async function getPointsById(id:number) {
//   const supabase = await createClient()
//   let totalPoints = 0
//   const {data, error} = await supabase
//   .from('points')
//   .select()
//   .eq('ambassador_id', id )
//   if (error) {
//     console.log("An error has occurred", error)
//   }
//   if ( data) {
//     totalPoints = data.reduce((sum, record) => sum + record.points, 0)
//   } else {
//     totalPoints = 0
//   } 
//   return totalPoints;
// }


export async function removePoints() {

}


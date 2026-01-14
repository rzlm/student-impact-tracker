'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Ambassador } from '@/lib/types'
import {createClient} from "./lib/supabase/server"

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
  .insert({ first_name: ambassador.first_name, last_name: ambassador.last_name, role:ambassador.role  }) 
  .select()
if (error) {
     console.log("An error occurred", error)
} else {
    console.log("successful")
}
  return data;

}

export async function deleteAmbassador(ambassadorId:string) {
    const supabase = await createClient()

    const { data, error } = await supabase
  .from('ambassadors')
  .delete() 
  .eq('id', ambassadorId)
if (error) {
     console.log("An error occurred", error)
} else {
    console.log("successful")
}
  return data;
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



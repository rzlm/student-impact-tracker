"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { signOut } from "@/lib/supabase/actions"
import { useIsMobile } from "@/components/hooks/use-mobile"
import { createClient } from "@/lib/supabase/client" 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

const components: { title: string; href: string; description: string }[] = [


]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const supabase = createClient()
    
    // Check initial session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsSignedIn(!!session)
      setLoading(false)
    }
    
    checkUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])


  return (
    <NavigationMenu viewport={isMobile} className=" flex flex-row justify-between bg-primary w-full">
        <NavigationMenuItem className="p-4 text-lg self-start">
           <NavigationMenuLink className="text-xl font-bold text-white "> StartUp Lab Point Tracker</NavigationMenuLink>
        </NavigationMenuItem>
        {!loading && isSignedIn && (
        <Button 
          variant="ghost" 
          className="text-amber-400 text-lg mr-8 hover:bg-amber-400 hover:text-primary" 
          onClick={signOut}
        >
          Sign out
        </Button>
      )}
      
      {!loading && !isSignedIn && (
        <Button 
          variant="ghost" 
          className="text-amber-400 text-lg mr-8 hover:bg-amber-400 hover:text-primary"
          asChild
        >
          <Link href="/login">Sign in</Link>
        </Button>
      )}
        {/* <NavigationMenuItem className="">  */}
           {/* <Button variant="ghost" className="text-amber-400 text-lg mr-8 hover:bg-amber-400 hover:text-primary" onClick={signOut} >Sign out</Button> */}
        {/* </NavigationMenuItem> */}

    </NavigationMenu>
  )
}



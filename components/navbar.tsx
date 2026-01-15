"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { signOut } from "@/actions"
import { useIsMobile } from "@/components/hooks/use-mobile"
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

const components: { title: string; href: string; description: string }[] = [



]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile} className=" flex flex-row justify-between bg-primary w-full">
        <NavigationMenuItem className="p-4 text-lg self-start">
           <NavigationMenuLink className="text-xl font-bold text-white "> StartUp Lab Point Tracker</NavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem className="">  */}
           <Button variant="ghost" className="text-amber-400 text-lg mr-8" onClick={signOut} >Sign out</Button>
        {/* </NavigationMenuItem> */}

    </NavigationMenu>
  )
}



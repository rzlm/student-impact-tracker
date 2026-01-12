"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

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
    <NavigationMenu viewport={isMobile} className=" flex flex-row justify-between">
        <NavigationMenuItem className="p-4 text-lg">
           <NavigationMenuLink className="text-lg"> StartUp Lab </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
           <Button variant="outline">Sign out</Button>
        </NavigationMenuItem>

    </NavigationMenu>
  )
}



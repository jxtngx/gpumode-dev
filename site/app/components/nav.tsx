'use client'

import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from "app/components/ui/button"
import { cn } from "app/lib/utils"


const navItems = {
  '/': {
    name: 'Home',
  },
  '/lectures': {
    name: 'Future Lectures',
  }
}

function ModeSwitcher() {

  const { setTheme, theme } = useTheme()
  
  return (
    <Button
      variant="ghost"
      className="group/toggle h-8 w-8 px-0"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </Button>
  )
}

function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
    className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
  >
    
    {Object.entries(navItems).map(([path, { name }]) => {
      return (
        <Link
          key={path}
          href={path}
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
        >
          {name}
        </Link>
      )
    })}

</nav>)
}

export function Navbar() {

  return (
    <header className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex flex-row items-center justify-between pr-10">
        <div className="lg:sticky lg:top-20">
          <MainNav />
        </div>
        <nav>
          <ModeSwitcher />
        </nav>
      </div>
    </header>
  )
}

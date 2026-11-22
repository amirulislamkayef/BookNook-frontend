"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const links = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/all-books" },
  { label: "Add Book", href: "/add-book" },
  { label: "My Books", href: "/my-books" },
  { label: "My Borrows", href: "/my-borrows" },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleSignOut = () => {
    authClient.signOut()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpg"
            alt="BookNook logo"
            width={40}
            height={40}
            className="size-10 rounded-md object-cover"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            Book<span className="text-[#e8925a]">Nook</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* login and signup */}
        <div className="flex items-center gap-2">

          {
            user ? <Popover>
              <PopoverTrigger render={<Avatar>
                <AvatarImage referrerPolicy="no-referrer" src={user?.image as string} />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              }>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>{user?.name}</PopoverTitle>
                  <PopoverDescription>{user?.email}</PopoverDescription>
                  <PopoverDescription><Button onClick={handleSignOut} variant={'destructive'}>Sign Out</Button></PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover> : <>

              <Button
                variant="outline"
                size="sm"
                render={<Link href="/login" />}
                onClick={() => setOpen(false)}
              >
                Login
              </Button>
              <Button size="sm" render={<Link href="/signup" />} onClick={() => setOpen(false)}>
                Sign Up
              </Button>
            </>
          }
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
        "hover:bg-muted hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      )}
    >
      {children}
    </Link>
  )
}

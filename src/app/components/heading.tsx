import { cn } from "@/utils"
import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export default function Heading({ children, className }: HeadingProps) {
  return <h1 className={cn("text-4xl font-bold", className)}>{children}</h1>
}

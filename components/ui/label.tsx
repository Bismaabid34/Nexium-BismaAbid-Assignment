"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../../src/lib/utils';

const labelVariants = cva(
  "flex items-center gap-2 text-sm leading-none font-medium select-none transition-all duration-200 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-gray-800 hover:text-blue-600",
        modern: "text-gray-700 font-semibold tracking-wide hover:text-purple-600 hover:scale-[1.02]",
        gradient: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold",
        subtle: "text-gray-600 hover:text-gray-800 font-normal",
        accent: "text-blue-700 font-semibold border-l-2 border-blue-500 pl-2 hover:border-purple-500 hover:text-purple-700",
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg",
      },
    },
    defaultVariants: {
      variant: "modern",
      size: "default",
    },
  }
)

interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

function Label({
  className,
  variant,
  size,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Label, labelVariants }
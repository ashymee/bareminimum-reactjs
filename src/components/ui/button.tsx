import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors hover:shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-transparent hover:bg-gray-500/5 text-gray-500 active:translate-y-[1px] border border-gray-200 dark:border-gray-700/50',
        destructive: 'bg-red-500/10 hover:bg-red-500/30 text-red-500 hover:text-red-600 active:translate-y-[1px]',
        white: 'bg-white/10 hover:bg-white/30 text-white border border-white/20 active:translate-y-[1px]',
        blue: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 active:translate-y-[1px]',
        green: 'bg-green-500/10 hover:bg-green-500/20 text-green-500 active:translate-y-[1px]',
        orange: 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 active:translate-y-[1px]',
        amber: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 active:translate-y-[1px]',
        yellow: 'bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 active:translate-y-[1px]',
        lime: 'bg-lime-500/10 hover:bg-lime-500/20 text-lime-500 active:translate-y-[1px]',
        emerald: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 active:translate-y-[1px]',
        teal: 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-500 active:translate-y-[1px]',
        cyan: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 active:translate-y-[1px]',
        sky: 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-500 active:translate-y-[1px]',
        indigo: 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 active:translate-y-[1px]',
        violet: 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 active:translate-y-[1px]',
        purple: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 active:translate-y-[1px]',
        fuchsia: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-500 active:translate-y-[1px]',
        pink: 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 active:translate-y-[1px]',
        rose: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 active:translate-y-[1px]',
        stone: 'bg-stone-500/10 hover:bg-stone-500/20 text-stone-500 active:translate-y-[1px]',
        gray: 'bg-gray-500/10 hover:bg-gray-500/20 text-gray-500 active:translate-y-[1px]',
        slate: 'bg-slate-500/10 hover:bg-slate-500/20 text-slate-500 active:translate-y-[1px]',
        zinc: 'bg-zinc-500/10 hover:bg-zinc-500/20 text-zinc-500 active:translate-y-[1px]',
        neutral: 'bg-neutral-500/10 hover:bg-neutral-500/20 text-neutral-500 active:translate-y-[1px]',

        'outline-white': 'bg-white/10 hover:bg-white/30 text-white border border-white/20 active:translate-y-[1px]',
        'outline-blue': 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border border-blue-500 active:translate-y-[1px]',
        'outline-green': 'bg-green-500/10 hover:bg-green-500/20 text-green-500 border border-green-500 active:translate-y-[1px]',
        'outline-orange': 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 border border-orange-500 active:translate-y-[1px]',
        'outline-amber': 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500 active:translate-y-[1px]',
        'outline-yellow': 'bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500 active:translate-y-[1px]',
        'outline-lime': 'bg-lime-500/10 hover:bg-lime-500/20 text-lime-500 border border-lime-500 active:translate-y-[1px]',
        'outline-emerald': 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500 active:translate-y-[1px]',
        'outline-teal': 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-500 border border-teal-500 active:translate-y-[1px]',
        'outline-cyan': 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 border border-cyan-500 active:translate-y-[1px]',
        'outline-sky': 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-500 border border-sky-500 active:translate-y-[1px]',
        'outline-indigo': 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 border border-indigo-500 active:translate-y-[1px]',
        'outline-violet': 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-500 border border-violet-500 active:translate-y-[1px]',
        'outline-purple': 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 border border-purple-500 active:translate-y-[1px]',
        'outline-fuchsia': 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-500 border border-fuchsia-500 active:translate-y-[1px]',
        'outline-pink': 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 border border-pink-500 active:translate-y-[1px]',
        'outline-rose': 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500 active:translate-y-[1px]',
        'outline-stone': 'bg-stone-500/10 hover:bg-stone-500/20 text-stone-500 border border-stone-500 active:translate-y-[1px]',
        'outline-gray': 'bg-gray-500/10 hover:bg-gray-500/20 text-gray-500 border border-gray-500 active:translate-y-[1px]',
        'outline-neutral': 'bg-neutral-500/10 hover:bg-neutral-500/20 text-neutral-500 border border-neutral-500 active:translate-y-[1px]',
        'blue-selected': 'bg-blue-500 hover:bg-blue-600/20 text-white hover:bg-blue-700 active:translate-y-[1px]',
        'green-selected': 'bg-green-500 hover:bg-green-600/20 text-white hover:bg-green-700 active:translate-y-[1px]',
        'orange-selected': 'bg-orange-500 hover:bg-orange-600/20 text-white hover:bg-orange-700 active:translate-y-[1px]',
        'amber-selected': 'bg-amber-500 hover:bg-amber-600/20 text-white hover:bg-amber-700 active:translate-y-[1px]',
        'yellow-selected': 'bg-yellow-500 hover:bg-yellow-600/20 text-white hover:bg-yellow-700 active:translate-y-[1px]',
        'lime-selected': 'bg-lime-500 hover:bg-lime-600/20 text-white hover:bg-lime-700 active:translate-y-[1px]',
        'emerald-selected': 'bg-emerald-500 hover:bg-emerald-600/20 text-white hover:bg-emerald-700 active:translate-y-[1px]',
        'teal-selected': 'bg-teal-500 hover:bg-teal-600/20 text-white hover:bg-teal-700 active:translate-y-[1px]',
        'cyan-selected': 'bg-cyan-500 hover:bg-cyan-600/20 text-white hover:bg-cyan-700 active:translate-y-[1px]',
        'sky-selected': 'bg-sky-500 hover:bg-sky-600/20 text-white hover:bg-sky-700 active:translate-y-[1px]',
        'indigo-selected': 'bg-indigo-500 hover:bg-indigo-600/20 text-white hover:bg-indigo-700 active:translate-y-[1px]',
        'violet-selected': 'bg-violet-500 hover:bg-violet-600/20 text-white hover:bg-violet-700 active:translate-y-[1px]',
        'purple-selected': 'bg-purple-500 hover:bg-purple-600/20 text-white hover:bg-purple-700 active:translate-y-[1px]',
        'fuchsia-selected': 'bg-fuchsia-500 hover:bg-fuchsia-600/20 text-white hover:bg-fuchsia-700 active:translate-y-[1px]',
        'pink-selected': 'bg-pink-500 hover:bg-pink-600/20 text-white hover:bg-pink-700 active:translate-y-[1px]',
        'rose-selected': 'bg-rose-500 hover:bg-rose-600/20 text-white hover:bg-rose-700 active:translate-y-[1px]',
        'gray-selected': 'bg-gray-500 hover:bg-gray-600 text-white hover:bg-gray-700 active:translate-y-[1px]',
        'slate-selected': 'bg-slate-500 hover:bg-slate-600/20 text-white hover:bg-slate-700 active:translate-y-[1px]',
        'zinc-selected': 'bg-zinc-500 hover:bg-zinc-600/20 text-white hover:bg-zinc-700 active:translate-y-[1px]',
        media: 'bg-transparent border hover:bg-slate-600/10 text-white hover:bg-slate-700 active:translate-y-[1px]',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:text-accent-foreground active:translate-y-[1px]',
        link: 'text-primary underline-offset-4 hover:underline active:translate-y-[1px]',
        'green-gradient': 'bg-gradient-to-tr from-green-800 to-green-400 text-white rounded-xl shadow-lg active:translate-y-[1px]'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        capsule: 'h-9 px-4 py-2 rounded-full',
        icon: 'h-9 w-9 rounded-full',
        'icon-sm': 'h-6 w-6 rounded-full',
        'icon-lg': 'h-14 w-14 rounded-full',
        box: 'h-9 w-9 rounded-lg',
        'box-sm': 'h-6 w-6 rounded-lg',
        'box-lg': 'h-12 w-12 rounded-2xl text-2xl',
        dot: 'h-11 w-11 rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

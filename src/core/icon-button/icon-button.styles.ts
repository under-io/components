import { cn } from 'under-io-utils'

type TButtonStyles = {
  destructive: {
    brand: string
    link: string
    'link-secondary': string
    outline: string
    secondary: string
    tertiary: string
  }
  normal: {
    brand: string
    link: string
    'link-secondary': string
    outline: string
    secondary: string
    tertiary: string
  }
  wrapper: string
} & {
  [size in 'lg' | 'md' | 'sm' | 'xl' | 'xs']: string
}

export const iconButtonStyles: TButtonStyles = {
  destructive: {
    brand: cn(
      'border-red-600 bg-red-600 shadow-xs text-white dark:bg-red-200 dark:border-red-200',
      'hover:border-red-700 hover:bg-red-700 dark:hover:border-red-100 dark:hover:bg-red-100',
      'active:border-red-600 active:bg-red-600 active:ring-red-500/[24%]',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-disabled'
    ),
    link: cn(
      'text-red-700 dark:text-red-300 h-auto border-none bg-transparent px-0',
      'hover:text-red-800 dark:hover:text-red-200',
      'active:text-red-700 dark:active:text-red-300 active:bg-transparent dark:active:bg-transparent',
      'disabled:text-fg-disabled',
      'hover:underline underline-offset-2 focus:underline active:underline'
    ),
    'link-secondary': cn(
      'h-auto border-none bg-transparent px-0 text-slate-600 dark:text-gray-400',
      'hover:text-slate-800 dark:hover:text-gray-200',
      'active:bg-transparent active:text-gray-600 dark:active:text-gray-400',
      'disabled:text-fg-disabled',
      'hover:underline underline-offset-2 focus:underline active:underline'
    ),
    outline: cn(
      'border-red-300 text-red-700 shadow-xs dark:border-red-50 dark:text-red-200',
      'hover:bg-red-100 hover:text-red-800 dark:hover:bg-red-950 dark:hover:border-red-100 dark:hover:text-white',
      'active:border-red-300 active:text-red-700 active:ring-red-300/[24%] dark:active:bg-red-950 dark:active:border-red-100 dark:active:text-white'
    ),
    secondary: cn(
      'border-red-200 bg-red-200 text-red-700 shadow-xs dark:bg-red-50 dark:text-white dark:border-red-50',
      'hover:bg-red-300 hover:text-red-800 hover:border-red-300 dark:hover:border-red-100 dark:hover:bg-red-100',
      'active:border-red-300 active:bg-red-300 active:text-red-700 active:ring-red-300/[24%] dark:active:bg-red-100 dark:active:border-red-100',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-primary'
    ),
    tertiary: cn(
      'text-red-700 dark:text-red-300 border-none bg-transparent',
      'hover:bg-red-100 hover:text-red-800 dark:hover:border-red-100 dark:hover:bg-red-100 dark:hover:text-white ',
      'active:text-red-700 dark:active:text-red-300 active:bg-transparent dark:active:bg-transparent',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-primary'
    ),
  },
  lg: 'h-11 px-4 text-base',
  md: 'h-10 px-4 text-sm',
  normal: {
    brand: cn(
      'shadow-xs border-brand-500 bg-brand-500 text-white dark:bg-brand-400 dark:border-brand-400',
      'hover:bg-brand-700 dark:hover:bg-brand-200',
      'ring-brand-500/[24%] focus-visible:bg-brand-600 active:bg-brand-600',
      'dark:ring-brand-300/[30%] dark:focus-visible:bg-brand-300 dark:active:bg-brand-300',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-disabled',
      'selection:bg-brand-600 selection:text-brand-300 dark:selection:bg-brand-300 dark:selection:text-black'
    ),
    link: cn(
      'h-auto border-none bg-transparent px-0 text-brand-600 dark:text-brand-400',
      'hover:text-brand-700 dark:hover:text-brand-200',
      'focus-visible:text-brand-700 active:bg-transparent active:text-brand-700 dark:focus-visible:text-brand-200 dark:active:text-brand-200',
      'disabled:text-fg-disabled',
      'hover:underline underline-offset-2 focus:underline active:underline'
    ),
    'link-secondary': cn(
      'h-auto border-none bg-transparent px-0 text-slate-600 dark:text-gray-400',
      'hover:text-slate-800 dark:hover:text-gray-200',
      'active:bg-transparent active:text-gray-600 dark:active:text-gray-400',
      'disabled:text-fg-disabled',
      'hover:underline underline-offset-2 focus:underline active:underline'
    ),
    outline: cn(
      'shadow-xs border-primary bg-transparent text-primary',
      'hover:text-fg-secondary_hover hover:bg-secondary ',
      'focus-visible:ring-gray-400/[10%] active:bg-transparent active:ring-gray-400/[10%]',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-primary'
      /** Dark */
    ),
    secondary: cn(
      'shadow-xs border-slate-300 bg-slate-300 text-primary',
      'hover:text-fg-secondary_hover hover:border-slate-400 hover:bg-slate-400',
      'ring-gray-400/[10%] focus-visible:border-slate-400 focus-visible:bg-slate-400 active:border-slate-400 active:bg-slate-400',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-primary'
    ),
    tertiary: cn(
      'border-none bg-transparent text-gray-600 dark:text-gray-400',
      'hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200',
      'active:bg-transparent active:text-gray-600 dark:active:bg-transparent dark:active:text-gray-400',
      'disabled:text-fg-disabled disabled:border-disabled_subtle disabled:bg-primary'
    ),
  },
  sm: 'h-9 px-2.5 text-sm',
  wrapper: cn(
    'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md border font-semibold transition duration-150 ease-in-out bg-transparent',
    'outline-none ring-transparent',
    'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-4 active:ring-4',
    'disabled:pointer-events-none disabled:cursor-default disabled:ring-0 disabled:ring-transparent'
  ),
  xl: 'h-12 px-[18px] text-base',
  xs: 'h-8 px-2 text-xs',
}

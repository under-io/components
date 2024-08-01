import { ButtonHTMLAttributes, forwardRef, memo } from 'react'

import { type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from 'under-io-utils'

import { destructiveVariants, normalVariants } from './icon-button.variants'

type TNormalVariants = VariantProps<typeof normalVariants>
type TDestructiveVariants = VariantProps<typeof destructiveVariants>

type TButtonVariants =
  | (TDestructiveVariants & {
      group: 'destructive'
    })
  | (TNormalVariants & {
      group: 'normal'
    })

export type TIconButton = TButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }

const IconButton = memo(
  forwardRef<HTMLButtonElement, TIconButton>(
    ({ asChild = false, className, group = 'normal', size, variant, ...props }, ref) => {
      const Comp: 'button' | typeof Slot = asChild ? Slot : 'button'

      return (
        <Comp
          ref={ref}
          className={cn(
            group === 'destructive'
              ? destructiveVariants({
                  size,
                  variant,
                } as VariantProps<typeof destructiveVariants>)
              : normalVariants({ size, variant } as VariantProps<typeof normalVariants>),
            className
          )}
          type={props.type || 'button'}
          {...props}
        />
      )
    }
  )
)
IconButton.displayName = 'IconButton'

export default IconButton

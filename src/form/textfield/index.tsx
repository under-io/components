import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

type TTextfield = ComponentPropsWithoutRef<'div'> & {}

const Textfield = forwardRef<HTMLDivElement, TTextfield>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        Textfield
      </div>
    )
  }
)
Textfield.displayName = 'Textfield'

export default memo(Textfield)

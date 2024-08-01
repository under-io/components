import { cva } from 'class-variance-authority'

import { buttonStyles } from './button.styles'

export const normalVariants = cva(buttonStyles.wrapper, {
  defaultVariants: {
    size: 'md',
    variant: 'brand',
  },
  variants: {
    size: {
      lg: buttonStyles.lg,
      md: buttonStyles.md,
      sm: buttonStyles.sm,
      xl: buttonStyles.xl,
    },
    variant: {
      brand: buttonStyles.normal.brand,
      link: buttonStyles.normal.link,
      'link-secondary': buttonStyles.normal['link-secondary'],
      outline: buttonStyles.normal.outline,
      secondary: buttonStyles.normal.secondary,
      tertiary: buttonStyles.normal.tertiary,
    },
  },
})

export const destructiveVariants = cva(buttonStyles.wrapper, {
  defaultVariants: {
    size: 'md',
    variant: 'brand',
  },
  variants: {
    size: {
      lg: buttonStyles.lg,
      md: buttonStyles.md,
      sm: buttonStyles.sm,
      xl: buttonStyles.xl,
    },
    variant: {
      brand: buttonStyles.destructive.brand,
      link: buttonStyles.destructive.link,
      'link-secondary': buttonStyles.destructive['link-secondary'],
      outline: buttonStyles.destructive.outline,
      secondary: buttonStyles.destructive.secondary,
      tertiary: buttonStyles.destructive.tertiary,
    },
  },
})

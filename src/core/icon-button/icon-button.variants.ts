import { cva } from 'class-variance-authority'

import { iconButtonStyles } from './icon-button.styles'

export const normalVariants = cva(iconButtonStyles.wrapper, {
  defaultVariants: {
    size: 'md',
    variant: 'brand',
  },
  variants: {
    size: {
      lg: iconButtonStyles.lg,
      md: iconButtonStyles.md,
      sm: iconButtonStyles.sm,
      xl: iconButtonStyles.xl,
    },
    variant: {
      brand: iconButtonStyles.normal.brand,
      link: iconButtonStyles.normal.link,
      'link-secondary': iconButtonStyles.normal['link-secondary'],
      outline: iconButtonStyles.normal.outline,
      secondary: iconButtonStyles.normal.secondary,
      tertiary: iconButtonStyles.normal.tertiary,
    },
  },
})

export const destructiveVariants = cva(iconButtonStyles.wrapper, {
  defaultVariants: {
    size: 'md',
    variant: 'brand',
  },
  variants: {
    size: {
      lg: iconButtonStyles.lg,
      md: iconButtonStyles.md,
      sm: iconButtonStyles.sm,
      xl: iconButtonStyles.xl,
    },
    variant: {
      brand: iconButtonStyles.destructive.brand,
      link: iconButtonStyles.destructive.link,
      'link-secondary': iconButtonStyles.destructive['link-secondary'],
      outline: iconButtonStyles.destructive.outline,
      secondary: iconButtonStyles.destructive.secondary,
      tertiary: iconButtonStyles.destructive.tertiary,
    },
  },
})

import type { Preview } from '@storybook/react'

import React, { ReactNode, useEffect, useState } from 'react'

import { DocsContextProps, Renderer } from '@storybook/core/types'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { ThemeVars } from 'storybook/internal/theming'
import { DocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming'
import { JSX } from 'react/jsx-runtime'

import '../src/index.css'

const MyDocsContainer = (props: {
  children: ReactNode
  context: DocsContextProps
  theme?: ThemeVars
}): JSX.Element => {
  const [isDark, setDark] = useState<boolean>(true)

  useEffect(() => {
    props.context.channel.on(DARK_MODE_EVENT_NAME, setDark)

    return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
  }, [props.context.channel])

  return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: 'html',
      current: 'light',
      darkClass: ['dark', 'bg-primary'],
      lightClass: ['light', 'bg-primary'],
      stylePreview: true,
    },
    docs: {
      container: (
        props: JSX.IntrinsicAttributes & {
          children: React.ReactNode
          context: DocsContextProps<Renderer>
          theme?: ThemeVars | undefined
        }
      ) => <MyDocsContainer {...props} />,
    },
  },
}

export default preview

import color from 'color'
import deepmerge from 'deepmerge'
import { ReactNode } from 'react'

export type Theme = {
  colors: {
    primary?: string
  }
  radius: {
    primary?: string
  }
}
const defaultTheme: Theme = {
  colors: {
    primary: '#1d4ed8',
  },
  radius: {
    primary: '0.375rem',
  },
}

export interface ThemeProviderProps {
  theme?: Theme
  children?: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props
  const appliedTheme = deepmerge(defaultTheme, theme || {})

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --pl-color-primary: ${color(appliedTheme.colors.primary)
              .rgb()
              .array()};
            --pl-color-primary-dark: ${color(appliedTheme.colors.primary)
              .darken(0.2)
              .rgb()
              .array()};
            --pl-border-radius-primary: ${appliedTheme.radius.primary};
          }
      `,
        }}
      ></style>
      {children}
    </>
  )
}

export default ThemeProvider

import color from 'color'
import { ReactNode } from 'react'

export interface ThemeProviderProps {
  primary?: string
  children?: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, primary = '#111' } = props

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --pl-color-primary: ${color(primary).rgb().array()};
          }
      `,
        }}
      ></style>
      {children}
    </>
  )
}

export default ThemeProvider

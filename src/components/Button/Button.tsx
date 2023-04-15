import { ReactNode } from 'react'

export interface ButtonProps {
  primary?: boolean
  children: ReactNode
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { children } = props
  return (
    <button className="rounded-primary bg-primary bg-opacity-100 p-4 px-8 py-4 text-white transition-all hover:bg-primary-dark">
      {children}
    </button>
  )
}

export default Button

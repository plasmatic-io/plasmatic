export interface ButtonProps {
  primary?: boolean
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button>{props.primary ? 'Primary' : 'Secondary'}</button>
}

export default Button

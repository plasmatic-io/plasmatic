export interface ButtonProps {
  primary?: boolean
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button className="rounded-lg bg-primary p-4 text-white">
      {props.primary ? 'Primary' : 'Secondary'}
    </button>
  )
}

export default Button

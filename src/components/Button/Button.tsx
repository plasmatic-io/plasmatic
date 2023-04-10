export interface ButtonProps {
  primary?: boolean
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button className="bg-black text-white p-4 rounded-lg">
      {props.primary ? 'Primary' : 'Secondary'}
    </button>
  )
}

export default Button

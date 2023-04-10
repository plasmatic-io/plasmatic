export interface ButtonProps {
  primary?: boolean;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <div>{props.primary ? "Primary" : "Secondary"}</div>;
};

export default Button;

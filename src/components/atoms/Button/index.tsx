import * as S from "./button.style";

interface ButtonProps {
  children?: any;
  width: string;
  height: string;
  backgroundColor?: string;
  color: string;
  border: string;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

/// <reference types="react-scripts" />

interface StyledComponentProps {
  className?: string;
  children: React.ReactNode;
}

interface CssProps {
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  cursor?: string;
}

interface ButtonProps {
  buttonType?: 'primary' | 'secondary';
  className?: string;
  onClick: () => void;
}

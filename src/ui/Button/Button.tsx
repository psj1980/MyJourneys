import "./Button.css";

import {
  Button as ReactAriaButton,
  type ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import Spinner from "../Spinner/Spinner";
import type { Variant, Size } from "../../types/component";

export type ButtonProps = Omit<
  ReactAriaButtonProps,
  "children" | "className"
> & {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
};

const variantStyles: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
};

const sizeStyles: Record<Size, string> = {
  small: "text-sm px-3 py-1.5 gap-2",
  medium: "text-base px-5 py-2.5 gap-4",
  large: "text-lg px-7 py-3.5 gap-5",
};

/**
 * Renders a styled button using react-aria-components.
 *
 * @remarks
 * - Supports variants: 'primary', 'secondary', 'outline', 'crazy'.
 * - Supports sizes: 'small', 'medium', 'large'.
 *
 * @param props - ButtonProps
 *
 * @param props.children - Button label or content.
 *
 * @param props.size - Button size ('small' | 'medium' | 'large'). Default is 'medium'.
 *
 * @param props.variant - Button variant ('primary' | 'secondary' | 'outline' | 'crazy'). Default is 'primary'.
 *
 * @returns A React element for a styled button.
 */
export default function Button({
  children,
  size = "medium",
  variant = "primary",
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <ReactAriaButton
      className={`
        btn
        m-1
        inline-flex items-center justify-center position-relative overflow-hidden
        font-medium cursor-pointer transition-all duration-200 rounded-md        
        ${sizeStyles[size]}
        ${variantStyles[variant]}`}
      {...rest}
    >
      {rest.isPending && <Spinner size={size} />}
      {children}
    </ReactAriaButton>
  );
}

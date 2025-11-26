import {
  Button as ReactAriaButton,
  type ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import type { Size, Variant } from "../../types/component";
import Spinner from "../Spinner/Spinner";

type ButtonVariant = Variant | "details";

export type ButtonProps = Omit<
  ReactAriaButtonProps,
  "children" | "className"
> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: Size;
};

const buttonSharedStyles = `  
        inline-flex items-center justify-center position-relative overflow-hidden      
        transition-all duration-200 
        before:content-[''] before:absolute before:top-1/2 before:left-1/2
        before:w-0 before:h-0 before:rounded-full 
        before:bg-white/50 before:-translate-x-1/2 before:-translate-y-1/2 
        before:transition-width before:transition-height before:duration-600 
        active:translate-y-0
        active:before:w-[300px] active:before:h-[300px]
        hover:-translate-y-0.5
        disabled:translate-y-0
        `;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `dark:bg-none dark:bg-[oklch(0.922_0_0)] dark:text-[oklch(0.205 0 0)]
            dark:hover:bg-none dark:hover:bg-[rgba(236,236,236,0.9)]
            text-black-soft shadow-sm
            bg-[linear-gradient(135deg,var(--color-theme-one)_0%,var(--color-theme-two)_100%)]
            hover:bg-[linear-gradient(135deg,var(--color-theme-two)_0%,var(--color-theme-one)_100%)]
            active:shadow-xs
            focus:shadow-focus
            disabled:bg-none`,
  secondary: `bg-theme-four text-black-soft shadow-sm
              hover:bg-destructive hover:shadow-md
              active:shadow-xs
              focus:shadow-focus-secondary`,
  outline: `dark:border-1 dark:disabled-shadow-none
            shadow-none bg-transparent text-theme-one border-2 border-theme-one     
            hover:bg-theme-one hover:text-black-soft hover:shadow-sm
            disabled:hover:shadow-sm
            focus:shadow-focus active:shadow-none`,
  details: `
  inline-flex items-center justify-center position-relative overflow-hidden 
  px-4 py-2 bg-theme-one text-foreground-dark border
            transition-all duration-150 ease-in border-0 font-sans
            hover:bg-theme-two hover:translate-x-[2px]
            disabled:translate-x-0
        `,
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
        rounded-xl 
        cursor-pointer
        font-medium
        outline-none text-decoration-none white-space-nowrap
        disabled:cursor-not-allowed disabled:border-none 
        disabled:text-muted-foreground disabled:bg-muted
        disabled:shadow-none
        ${variant !== "details" && buttonSharedStyles}     
        ${sizeStyles[size]}
        ${variantStyles[variant]}`}
      {...rest}
    >
      {rest.isPending && <Spinner size={size} />}
      {children}
    </ReactAriaButton>
  );
}

// <button
//   className={`
//             px-4 py-2 bg-theme-one text-foreground-dark border rounded-xl font-medium
//             transition-all duration-150 ease-in border-0 cursor-pointer font-sans
//             hover:bg-theme-two hover:translate-x-[2px]`}
// ></button>;

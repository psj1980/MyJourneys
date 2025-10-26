import {
  Button as ReactAriaButton,
  type ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";

/**
 * Variant types for the Button component.
 */
type Variant = "primary" | "secondary" | "outline" | "crazy";

/**
 * Size types for the Button component.
 */
type Size = "small" | "medium" | "large";

export type ButtonProps = Omit<
  ReactAriaButtonProps,
  "children" | "className"
> & {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
};

const variantStyles: Record<Variant, string> = {
  primary: `
    bg-primary
    text-secondary-text
    hover:bg-primary-hover
    focus:ring-primary-active
  `,
  secondary: `
    bg-secondary
    text-primary-text
    hover:bg-secondary-hover
    focus:ring-secondary-active
  `,
  outline: `
    bg-ghost
    text-ghost-text
    outline-2 border-ghost-text
    hover:border-ghost-hover
    hover:text-ghost-hover
    focus:ring-ghost-active
  `,
  crazy: `
    bg-gradient-to-r from-primary to-secondary    
    text-secondary-text
    hover:bg-gradient-to-l from-primary to-secondary    
    focus:ring-secondary
  `,
};

const sizeStyles: Record<Size, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

/**
 * Renders a styled button using react-aria-components.
 *
 * @remarks
 * - Uses Tailwind CSS for styling.
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
    <div className="p-1">
      <ReactAriaButton
        {...rest}
        className={`
        px-6 py-3 font-bold rounded-2xl 
        hover:rounded-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed 
        transition-all duration-200
        shadow-sm hover:shadow-lg        
        ${variantStyles[variant]}
        ${sizeStyles[size]}
      `}
      >
        {children}
      </ReactAriaButton>
    </div>
  );
}

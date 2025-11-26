import {
  Tag as TagAria,
  type TagProps as TagAriaProps,
} from "react-aria-components";
import type { Size } from "../../types/component";

type Variant = "primary" | "secondary" | "success" | "warning" | "danger";

type TagProps = Omit<TagAriaProps, "children"> & {
  size?: Size;
  variant?: Variant;
  children: React.ReactNode;
};

/**
 * A Tag component that displays a label with different styles based on the variant.
 *
 * @param {React.ReactNode} [children] - The content to be displayed inside the tag.
 *
 * @param {Variant} - The variant style of the tag.
 *
 * @returns A React component that renders a styled tag.
 */
export default function Tag({
  size = "medium",
  variant = "primary",
  children,
  ...rest
}: Readonly<TagProps>) {
  const textSize = `
  ${size === "small" && "text-xs rounded-xl"}
  ${size === "medium" && "text-sm rounded-2xl"} 
  ${size === "large" && "text-md rounded-3xl"}`;

  return (
    <TagAria
      className={`
        inline-flex items-center gap-1 px-3 py-1  
        ${textSize} font-medium transition-all duration-150
        hover:-translate-y-px
        selected:bg-theme-one selected:text-foreground-dark
        ${
          variant === "primary" &&
          `bg-theme-two text-foreground-dark hover:bg-theme-one 
          dark:bg-theme-two/20 dark:text-theme-two 
          dark:hover:bg-soft-beach-bright-blue/30 dark:hover:text-soft-beach-bright-blue`
        }
        ${
          variant === "secondary" &&
          `bg-gray-100 text-gray-800 hover:bg-gray-200
          dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600`
        }
        ${
          variant === "success" &&
          `bg-green-100 text-green-800 hover:bg-green-200
          dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800`
        }
        ${
          variant === "warning" &&
          `bg-yellow-100 text-yellow-800 hover:bg-yellow-200
          dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800`
        }
        ${
          variant === "danger" &&
          `bg-red-100 text-red-800 hover:bg-red-200
          dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800`
        }
    `}
      {...rest}
    >
      {children}
    </TagAria>
  );
}

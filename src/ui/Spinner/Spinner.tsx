import type { Size } from "../../types/component";

type SpinnerProps = {
  size?: Size;
};

/**
 * Spinner component
 *
 * @remarks
 * - Supports sizes: 'small', 'medium', 'large'.
 *
 * @param props.size - Spinner size ('small' | 'medium' | 'large'). Default is 'medium'.
 *
 * @returns A React spinning loader element.
 */
export default function Spinner({ size = "medium" }: Readonly<SpinnerProps>) {
  const sizeClasses = {
    small: "w-3 h-3 border-2",
    medium: "w-4 h-4 border-2",
    large: "w-5 h-5 border-2",
  };

  return (
    <div
      className={`${sizeClasses[size]} border-t-transparent rounded-full animate-spin opacity-50`}
      aria-label="Loading"
    />
  );
}

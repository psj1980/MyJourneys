import {
  Label as LabelAria,
  type LabelProps as LabelAriaProps,
} from "react-aria-components";

type LabelProps = Omit<LabelAriaProps, "children" | "className"> & {
  children: React.ReactNode;
};
/**
 * A simple Label component for displaying text.
 *
 * @param children - The text content of the label.
 *
 * @returns A React component that renders a label.
 */
export default function Label({ children, ...rest }: Readonly<LabelProps>) {
  return (
    <LabelAria className="text-sm font-medium text-gray-700" {...rest}>
      {children}
    </LabelAria>
  );
}

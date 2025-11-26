import {
  TagGroup as TagGroupAria,
  TagList as TagListAria,
  type TagGroupProps as TagGroupAriaProps,
  type TagListProps as TagListAriaProps,
} from "react-aria-components";
import type { Alignment } from "../../types/component";
import Label from "../Label/Label";

type TagGroupProps = Omit<TagGroupAriaProps, "children"> & {
  alignment?: Alignment;
  label?: string;
  children: React.ReactNode;
};

/**
 * A container component that arranges Tag components in a horizontal group with spacing.
 *
 * @param alignment - 'left' | 'center' | 'right'. Default is 'left'.
 *
 * @param label - The accessible label for the tag group.
 *
 * @param children - The Tag components to be displayed inside the group.
 *
 * @returns A React component that renders a horizontal group of tags.
 */
export default function TagGroup({
  alignment = "left",
  label,
  children,
  ...rest
}: Readonly<TagGroupProps>) {
  let alignmentClass = "items-start";
  if (alignment === "center") alignmentClass = "items-center";
  if (alignment === "right") alignmentClass = "items-end";

  return (
    <TagGroupAria className="mb-4 w-full" {...rest}>
      <div className={`flex flex-col gap-1 w-full ${alignmentClass}`}>
        {label && <Label>{label}</Label>}
        <TagList {...rest}>{children}</TagList>
      </div>
    </TagGroupAria>
  );
}

type TagListProps<T extends object> = Omit<TagListAriaProps<T>, "children"> & {
  children: React.ReactNode;
};

/**
 * TagList component for grouping Tag items.
 *
 * @template T - The type of items in the tag list.
 *
 * @param children - The Tag components to be displayed inside the list.
 *
 * @returns A React component that renders a list of tags.
 */
function TagList<T extends object>({
  children,
  ...rest
}: Readonly<TagListProps<T>>) {
  return (
    <TagListAria className={`flex flex-wrap gap-2 `} {...rest}>
      {children}
    </TagListAria>
  );
}

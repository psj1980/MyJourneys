import type { Alignment } from "../../types/component";

type TagGroupProps = {
  alignment?: Alignment;
  children: React.ReactNode;
};

/**
 * A container component that arranges Tag components in a horizontal group with spacing.
 *
 * @param alignment - The alignment of the tags within the group.
 *
 * @param alignment - 'left' | 'center' | 'right'. Default is 'right'.
 *
 * @param children - The Tag components to be displayed inside the group.
 *
 * @returns A React component that renders a horizontal group of tags.
 */
export default function TagGroup({
  alignment = "right",
  children,
}: Readonly<TagGroupProps>) {
  const alignmentClass = `
    ${alignment === "left" ? "justify-start" : ""}
    ${alignment === "center" ? "justify-center" : ""}
    ${alignment === "right" ? "justify-end" : ""}`;

  return (
    <div className={`flex flex-wrap gap-2 ${alignmentClass}`}>{children}</div>
  );
}

import type { Variant } from "./Types";

type DestinationDetailsContainerProps = {
  variant: Variant;
  children?: React.ReactNode;
};

export default function DestinationDetailsContainer({
  variant = "primary",
  children,
}: Readonly<DestinationDetailsContainerProps>) {
  return (
    <article
      className={`
        bg-white overflow-hidden cursor-pointer relative
        border border-white-border rounded-2xl shadow-md 
        transition-all duration-200 ease-in-out
        hover:-translate-y-1
        hover:shadow-pastel-rose
        hover:border-soft-beach-blue-green
        focus:outline-none focus:shadow-focus
        focus-visible:outline-none
        focus-visible:shadow-focus
        active:scale-[0.98]
        active:shadow-pastel-rose-active
        group
        ${variant === "horizontal" && "flex flex-col md:flex-row"}
        ${variant === "compact" && "p-0"}
    `}
    >
      {children}
    </article>
  );
}

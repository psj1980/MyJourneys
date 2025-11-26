import type { Variant } from "./Types";

type DestinationContentProps = {
  children: React.ReactNode;
  variant: Variant;
};

export default function DestinationContent({
  variant,
  children,
}: Readonly<DestinationContentProps>) {
  return (
    <div
      className={`p-6 flex flex-col
        ${variant == "horizontal" && "flex-1"} 
        ${variant == "compact" && "p-4"}`}
    >
      {children}
    </div>
  );
}

type DestinationListProps = {
  children: React.ReactNode;
};

/**
 * @remarks
 * - Component to display a list of destinations in a grid layout.
 *
 * @param children - The destination items to be displayed within the list.
 *
 * @returns React component with a list of destinations
 */
export default function DestinationList({
  children,
}: Readonly<DestinationListProps>) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {children}
    </div>
  );
}

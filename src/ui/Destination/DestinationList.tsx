type DestinationListProps = {
  children: React.ReactNode;
};

export default function DestinationList({
  children,
}: Readonly<DestinationListProps>) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
      {children}
    </div>
  );
}

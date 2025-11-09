type ErrorDisplayProps = {
  readonly error: unknown;
};

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded m-10">
      <h2 className="font-bold text-lg mb-2">Something went wrong22!</h2>
      <pre className="whitespace-pre-wrap">{String(error)}</pre>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import ForsideContent from "../ui/Page/Forside/Forside";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen p-8 space-y-8">
      <ForsideContent />
    </main>
  );
}

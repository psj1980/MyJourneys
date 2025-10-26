import { createFileRoute } from "@tanstack/react-router";
import AboutContent from "../ui/Page/AboutContent/AboutContent";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <AboutContent />;
}

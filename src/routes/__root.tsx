import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ErrorDisplay from "../ui/ErrorDisplay/ErrorDisplay";

const RootLayout = () => (
  <>
    <nav className="p-2 flex gap-4 m-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/destinations" className="[&.active]:font-bold">
        Destinations
      </Link>
    </nav>
    <hr />
    <main className="min-h-screen p-8 space-y-8">
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
  errorComponent: ErrorDisplay,
});

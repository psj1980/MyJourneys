import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

/**
 * Root error component for uncaught route errors
 * @param error - The error thrown by a route
 */
function RootErrorComponent({ error }: { readonly error: unknown }) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded">
      <h2 className="font-bold text-lg mb-2">Something went wrong!</h2>
      <pre className="whitespace-pre-wrap">{String(error)}</pre>
    </div>
  );
}

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
  errorComponent: RootErrorComponent,
});

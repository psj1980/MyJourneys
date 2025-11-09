import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      throwOnError: true,
    },
  },
});

type TestRoutingProps = {
  component: React.ReactNode;
};

const createTestRootRoute = ({ component }: TestRoutingProps) =>
  createRootRoute({
    component: () => <>{component}</>,
  });

const createTestRouter = ({ component }: TestRoutingProps) => {
  const rootRoute = createTestRootRoute({ component });

  return createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
};

export default function QueryClientAndRouteProviderForStorybook({
  component,
}: Readonly<TestRoutingProps>) {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createTestRouter({ component })} />
    </QueryClientProvider>
  );
}

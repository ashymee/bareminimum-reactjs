import Header from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { Waves } from "@/components/misc/Waves";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <PageContainer>
      <Header />
      <Waves />
      <Outlet />
      <TanStackRouterDevtools />
    </PageContainer>
  )
});

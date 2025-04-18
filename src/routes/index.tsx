import { Card } from "@/components/misc/Card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return <Card title="Home" />;
}

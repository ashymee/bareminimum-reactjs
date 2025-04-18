import { Card } from "@/components/misc/Card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return <Card title="About" />;
}

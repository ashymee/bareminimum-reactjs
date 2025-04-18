import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "../ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" }
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="p-2 flex gap-2 bg-transparent backdrop-blur-lg rounded-full border border-blue-500 absolute top-1 left-1">
      <nav className="flex gap-x-2">
        {links.map((item, index) => (
          <Button
            key={index}
            asChild
            variant={pathname === item.to ? "blue-selected" : "outline-blue"}
            size="capsule"
          >
            <Link to={item.to}>{item.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
}

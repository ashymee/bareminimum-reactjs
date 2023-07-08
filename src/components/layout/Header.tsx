import router from "@/router";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="flex-none w-full h-10 flex items-center justify-center border-b-2">
      <ul className="flex items-center justify-center gap-x-2">
        {router.routes.map((item, index) => {
          const path = item.path?.split("/")[1] as string;
          const title = path === "" ? "Home" : path;
          return (
            <li key={index}>
              {item ? (
                <Link
                  to={item.path as string}
                  title={title}
                  className={`capitalize ${location.pathname === item.path
                      ? "text-blue-500"
                      : "hover:text-blue-300"
                    }`}
                >
                  {title}
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

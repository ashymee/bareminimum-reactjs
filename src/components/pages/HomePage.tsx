import reactLogo from "@/assets/react.svg";
import Wrapper from "@/components/layout/Wrapper";
import { useState } from "react";
import viteLogo from "/vite.svg";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <div className="flex flex-col items-center gap-y-2 p-5 bg-gray-200 rounded-lg shadow-2xl">
        <h1 className="font-bold">Vite + React</h1>

        <div className="flex items-center">
          <a
            href="https://vitejs.dev"
            target="_blank"
            className="w-20 h-20 flex items-center justify-center group"
          >
            <img
              src={viteLogo}
              className="group-hover:scale-125 transition-all duration-300"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="w-20 h-20 flex items-center justify-center group"
          >
            <img
              src={reactLogo}
              className="group-hover:scale-125 transition-all duration-300"
              alt="React logo"
            />
          </a>
        </div>

        <div className="flex items-center justify-center border rounded-lg w-44">
          <button
            className="flex-none px-4 py-2 bg-gray-300 hover:bg-gray-400 active:translate-y-[1px] rounded-l-md"
            onClick={() => setCount((count) => (count < 1 ? 0 : count - 1))}
          >
            -
          </button>

          <div className="flex-1 text-center">{count}</div>

          <button
            className="flex-none px-4 py-2 bg-gray-300 hover:bg-gray-400 active:translate-y-[1px] rounded-r-md"
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </button>
        </div>

        <div className="card">
          <p className="p-2 bg-slate-900 rounded-md text-orange-500 text-xs">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-xs">
          Click on the <b>Vite</b> or <b>React</b> logos to learn more
        </p>
      </div>
    </Wrapper>
  );
}

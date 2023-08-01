import "@/styles/global.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import PageLoader from "@/components/loaders/PageLoader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

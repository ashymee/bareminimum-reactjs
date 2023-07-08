import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { WrapperProps } from "@/index";

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />

      <div className="flex-1 w-full flex flex-col items-center justify-center gap-y-2">
        {children}
      </div>

      <Footer />
    </div>
  );
}

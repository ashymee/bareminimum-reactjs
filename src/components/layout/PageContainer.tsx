export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-svh w-svw bg-gradient-to-t from-blue-700 to-blue-400 relative overflow-hidden">
      {children}

      <img
        src="/logo.svg"
        className="h-full opacity-10 pointer-events-none animate-[spin_20s_linear_infinite] absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"
        alt="logo"
      />
    </div>
  );
}

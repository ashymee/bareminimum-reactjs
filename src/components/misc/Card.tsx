export function Card({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-44 h-max border border-orange-500 rounded-xl shadow-2xl bg-white/50 text-blue-500 overflow-hidden z-50">
        <div className="flex items-center px-2 border-b border-orange-500 h-6">
          <div className="flex items-center gap-x-1 shrink-0">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="text-5xl font-extralight py-4 flex items-center justify-center">
          {title}
        </div>
      </div>
    </div>
  );
}

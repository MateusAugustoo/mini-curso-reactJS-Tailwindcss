export function Header({numberTask}) {
  return (
    <header className="flex items-center justify-center gap-4 py-4 border-b-2 border-slate-200 select-none">
      <h1 className="text-4xl font-bold">To-do List</h1>
      <p className="bg-slate-200 w-max px-2 py-1 rounded-full font-bold text-xs">
        {numberTask}
      </p>
    </header>
  );
}

export function AddTask({openForm}) {
  return (
    <>
      <button
        className="px-5 py-2 bg-violet-700 text-white rounded-md font-bold capitalize"
        onClick={openForm}
      >
        add task
      </button>
    </>
  );
}

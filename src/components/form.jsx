import { CalendarDays, UserRound } from "lucide-react";
import { useState } from "react";

export const Form = ({closeFrom, addTask}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleAssignedToChange = (event) => setAssignedTo(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {id: Date.now() ,title, description, date, assignedTo};
    addTask(newTask);
    closeFrom();
    setTitle("");
    setDescription("");
    setDate("");
    setAssignedTo("");
    
    console.log(newTask)
  };

  return (
    <form 
      className="w-container-form bg-slate-50 rounded-2xl overflow-hidden flex flex-col gap-1 px-4 py-3 shadow-custom"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Task name here..."
        id="taskName"
        name="taskName"
        value={title}
        required
        className="w-full border-none bg-transparent outline-none font-bold placeholder:text-slate-400 placeholder:font-bold"
        onChange={handleTitleChange}
      />
      <textarea
        id="taskDescription"
        name="taskDescription"
        value={description}
        placeholder="Description"
        className="h-20 border-none bg-transparent outline-none resize-none text-sm placeholder:text-slate-400 placeholder:font-bold"
        onChange={handleDescriptionChange}
      />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-28 flex items-center gap-2 border-2 border-slate-400 p-1 rounded-md">
            <CalendarDays
              size={36}
              strokeWidth={3}
              className="text-slate-400"
            />
            <input
              id="taskDueDate"
              name="taskDueDate"
              type="text"
              value={date}
              required
              placeholder="due date"
              className="w-full border-none outline-none placeholder:text-slate-400 placeholder:capitalize bg-transparent"
              onChange={handleDateChange}
            />
          </div>

          <div className="w-36 flex items-center gap-2 py-1 px-2 border-2 border-slate-400 rounded-md">
            <UserRound size={36} strokeWidth={3} className="text-slate-400" />
            <input
              id="taskAssignedTo"
              name="taskAssignedTo"
              type="text"
              value={assignedTo}
              required
              placeholder="assigned to"
              className="w-full border-none outline-none placeholder:text-slate-400 placeholder:capitalize bg-transparent"
              onChange={handleAssignedToChange}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="px-5 py-2 bg-transparent text-slate-400 rounded-md font-bold capitalize border-2 border-slate-400"
            onClick={closeFrom}
            >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-violet-700 text-white rounded-md font-bold capitalize">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}


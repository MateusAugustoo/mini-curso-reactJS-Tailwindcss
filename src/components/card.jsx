import { useState } from "react";
import { CalendarDays, Dot, Ellipsis, Trash2, UserRound } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Card({ id, title, description, date, assignedTo, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);
  const parsedDate = new Date(date)

  const formattedDate = format(parsedDate, "dd MMM yyyy", { locale: ptBR });

  const colorDateDayEndTask = () => {
    const today = new Date();
    const taskDate = new Date(date);
    const diffInTime = taskDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
  
    if (diffInDays <= 2 && diffInDays >=0) {
      return "text-red-600";
    } else if (diffInDays <= 4 && diffInDays > 2) {
      return "text-yellow-500";
    } else {
        return "text-slate-400"
    }
  };
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`group flex items-start justify-between w-full gap-7 border-b-2 border-slate-400 py-3 px-3 ${
        isChecked
          ? "transform transition-all duration-300 scale-95 bg-slate-200"
          : "transform transition-all duration-300 scale-100"
      } cursor-pointer`}
    >
      <span>
        <input
          type="checkbox"
          id={id}
          className="peer hidden"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <label
          htmlFor={id}
          className="border-2 border-slate-200 rounded-full w-6 h-6 flex items-center justify-center peer-checked:border-8 peer-checked:border-violet-700"
        />
      </span>

      <div className="flex flex-col gap-4">
        <div>
          <h2
            className={`text-base font-bold ${
              isChecked ? "line-through text-black" : ""
            }`}
          >
            {title}
          </h2>
          <p
            className={`w-96 text-xs ${
              isChecked ? "line-through text-black" 
              : "text-slate-400 group-hover:line-clamp-none group-hover:max-h-full"
            } text-wrap line-clamp-1 max-h-6 overflow-hidden`}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center">
          <span className={`flex items-center gap-2 font-medium capitalize ${colorDateDayEndTask()}`}>
            <CalendarDays />
            <p className={`${isChecked ? "line-through" : ""}`}>{formattedDate}</p>
          </span>
          <Dot size={36} className="text-slate-400" />
          <span className="flex items-center gap-2 text-slate-400 font-medium">
            <UserRound />
            <p className={`${isChecked ? "line-through" : ""}`}>{assignedTo}</p>
          </span>
        </div>
      </div>

      <Trash2 
        size={26} 
        className="cursor-pointer text-red-600" 
        onClick={() => onDelete(id)}
      />
    </div>
  );
}

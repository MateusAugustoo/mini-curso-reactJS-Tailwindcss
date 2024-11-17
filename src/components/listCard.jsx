import { Card } from "./card";
import { NotFoundTask } from "./notFoundTask";

export function ListCard({tasks, deleteTask}) {
  return (
    <ul className="flex flex-col gap-3 px-6 mt-3 overflow-y-auto h-[20rem]">
      {
        tasks.length > 0  && tasks ? (tasks.map((task, index) => (
          <li key={index}>
            <Card
              id={index} 
              {...task}
              onDelete={() => deleteTask(task.id)}
            />
          </li>
        ))) : (
          <NotFoundTask />
        ) 
      }
    </ul>
  );
}

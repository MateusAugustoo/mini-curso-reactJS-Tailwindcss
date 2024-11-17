import { AddTask } from "./components/addTask";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { ListCard } from "./components/listCard";
import { SearchTask } from "./components/search";
import { useEffect, useState } from "react";

export function App() {

  const instanceTasks = localStorage.getItem("tasks");
  useEffect(() => {
    if (instanceTasks) {
      setTasks(JSON.parse(instanceTasks));
    }else{
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [])

  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");


  const handlerShowForm = () => setShowForm(!showForm);
  const addTask = (tasks) => setTasks((prevTasks) => {
    const newTasks = [...prevTasks, tasks];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    return newTasks;
  })
  const searchTask = () => tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  return (
    <>
      <main className="bg-slate-200 w-full h-screen flex flex-col items-center justify-center">
        <section className="bg-white w-container-form pb-4 rounded-2xl flex flex-col gap-4">
          <Header 
            numberTask={tasks.length}
          />
          <div className="w-full flex justify-center gap-6">
            <SearchTask 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AddTask 
              openForm={handlerShowForm}
            />
          </div>
          <ListCard 
            tasks={searchTask()}
            deleteTask={deleteTask}
          />
        </section>

        {showForm && 
          <div
            className="absolute -top-4 left-0 w-full h-screen bg-slate-200/50 flex items-center justify-center"
          >
            <Form 
              closeFrom={handlerShowForm}
              addTask={addTask}
            />
          </div>
        }
      </main>
    </>
  );
}

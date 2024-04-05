import React, { useState } from "react";
import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

interface Task {
  id: number;
  job: string;
  isDone: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addJob = (job: string) => {
    const newTask: Task = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const addCheck = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (id === task.id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      })
    );
  };

  const deleteJob = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editJob = (newJob: string, id: number) => {
    setTasks(
      tasks.map((task) => {
        if (id === task.id) {
          return { ...task, job: newJob };
        }
        return task;
      })
    );
  };

  return (
    <main className="flex font-Nunito bg-yellow-300 justify-center w-full h-screen p-16">
      <div className="flex flex-col justify-start w-[400px] gap-5">
        <Heading />
        <ListCreateForm addJob={addJob} />
        <ListStatus tasks={tasks} />
        <ListGroup
          tasks={tasks}
          addCheck={addCheck}
          deleteJob={deleteJob}
          editJob={editJob}
        />
      </div>
    </main>
  );
};

export default App;

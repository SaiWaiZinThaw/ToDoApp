import React from "react";

interface Task {
  id: number;
  job: string;
  isDone: boolean;
}

interface ListStatusProps {
  tasks: Task[];
}

const ListStatus: React.FC<ListStatusProps> = (props) => {
  return (
    <div className="flex justify-between w-full p-2">
      <p className="text-xl font-bold">Your List</p>
      <div className="py-1 px-3 bg-slate-800 text-white rounded-lg">
        Done (
        <span id="doneItem">
          {props.tasks.filter((task) => task.isDone === true).length}
        </span>
        <span>/</span>
        <span id="leftItem">{props.tasks.length}</span>)
      </div>
    </div>
  );
}

export default ListStatus;

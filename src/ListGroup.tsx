import React from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";

interface Task {
  id: number;
  job: string;
  isDone: boolean;
}

interface ListGroupProps {
  tasks: Task[];
  addCheck: (id: number) => void;
  deleteJob: (id: number) => void;
  editJob: (newJob: string, id: number) => void;
}

const ListGroup: React.FC<ListGroupProps> = (props) => {
  return (
    <div id="listGroup">
      <EmptyStage />
      {props.tasks.map((task) => (
        <List
          job={task.job}
          isDone={task.isDone}
          key={task.id}
          addCheck={props.addCheck}
          id={task.id}
          deleteJob={props.deleteJob}
          editJob={props.editJob}
        />
      ))}
    </div>
  );
};

export default ListGroup;

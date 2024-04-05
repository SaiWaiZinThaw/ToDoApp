import React, { useState, ChangeEvent } from "react";

interface ListCreateFormProps {
  addJob: (job: string) => void;
}

const ListCreateForm: React.FC<ListCreateFormProps> = (props) => {
  const [job, setJob] = useState<string>("");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value);
  };

  const btnHandler = () => {
    if (job) {
      props.addJob(job);
      setJob("");
    }
  };

  return (
    <div className="w-full flex items-center rounded-lg">
      <input
        type="text"
        id="input"
        value={job}
        onChange={inputHandler}
        className="border py-4 px-2 border-gray-500 w-11/12 ring-0 outline-none rounded-s-lg font-Nunito font-semibold"
      />
      <button
        onClick={btnHandler}
        className="bg-slate-800 w-1/12 h-full  text-white text-2xl rounded-e-lg"
      >
        +
      </button>
    </div>
  );
};

export default ListCreateForm;

import Task from "../Task/Task";

export default function Column({ status, tasks, onChangeStatus }) {
  const filteredTasks = tasks.filter(
    task => task.status === status
  );

  return (
    <div>
      <h3>{status}</h3>

      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
}

import Task from "../Task/Task";
import styles from "./Column.module.css"

export default function Column({ status, tasks, onChangeStatus, onDeleteTask, onEditTask, onDragStart, onDrop }) {
	const filteredTasks = tasks.filter(
		task => task.status === status
	);

	return (
		<div className={styles.column}
			onDragOver={(e) => e.preventDefault()}
			onDrop={() => onDrop(status)}
		>
			<h3 className={styles.title}>{status}</h3>

			{filteredTasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onChangeStatus={onChangeStatus}
					onDeleteTask={onDeleteTask}
					onEditTask={onEditTask}
					onDragStart={onDragStart}
				/>
			))}
		</div>
	);

}

import Task from "../Task/Task";
import styles from "./Column.module.css"

export default function Column({ status, tasks, onChangeStatus, onDeleteTask, onEditTask }) {
	const filteredTasks = tasks.filter(
		task => task.status === status
	);

	return (
		<div className={styles.column}>
			<h3 className={styles.title}>{status}</h3>

			{filteredTasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onChangeStatus={onChangeStatus}
					onDeleteTask={onDeleteTask}
					onEditTask={onEditTask}
				/>
			))}
		</div>
	);

}

export default function Column({ status, tasks }) {

	const filteredTasks = tasks.filter(task => task.status === status)

	return (
		<div>
			<h3>{status}</h3>

			{filteredTasks.map(task => (
				<div key={task.id}>
					{task.title}
				</div>
			))}
		</div>
	)
}
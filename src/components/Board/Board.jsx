import Column from "../Column/Column"

export default function Board({ tasks }) {
	return (
		<div>
			<Column status="todo" tasks={tasks} />
			<Column status="in-progress" tasks={tasks} />
			<Column status="done" tasks={tasks} />
		</div>

	)
}

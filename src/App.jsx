import { useState } from "react"
import AddTask from './components/AddTask/AddTask'
import Board from './components/Board/Board'

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Example task", status: "todo" } // mock task for initial example
		// other tasks will be added by the user
	])


	function handleAddTask(title) {
		const newTask = {
			id: Date.now(),
			title,
			status: "todo",
		}
		setTasks(prevTasks => [...prevTasks, newTask])
	}


	return (
		<>
			<h1>Kanban Board</h1>
			<AddTask onAddTask={handleAddTask} />
			<Board tasks={tasks} />
		</>
	)
}

export default App

import { useState } from "react"
import AddTask from './components/AddTask/AddTask'
import Board from './components/Board/Board'

function App() {
	const [tasks, setTasks] = useState([
		// mock data for initial render
		{ id: 1, title: "Изучить архитектуру проекта", status: "todo" },
		{ id: 2, title: "Реализовать модель данных", status: "in-progress" },
		{ id: 3, title: "Сделать первый коммит", status: "done" },
	])

	return (
		<>
			<h1>Kanban Board</h1>
			<AddTask />
			<Board tasks={tasks} />
		</>
	)
}

export default App

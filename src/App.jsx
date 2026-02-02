import { useState, useEffect } from "react"
import AddTask from './components/AddTask/AddTask'
import Board from './components/Board/Board'

function App() {
	const [tasks, setTasks] = useState(() => {
		const saved = localStorage.getItem("tasks");
		return saved ? JSON.parse(saved) : [
			{ id: 1, title: "Example task", status: "ToDo" }
		];
	});


	function handleAddTask(title) {
		const newTask = {
			id: Date.now(),
			title,
			status: "ToDo",
		}
		setTasks(prevTasks => [...prevTasks, newTask])
	}

	const changeStatus = (id, newStatus) => {
		setTasks(prev =>
			prev.map(task =>
				task.id === id
					? { ...task, status: newStatus }
					: task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks(prev =>
			prev.filter(task => task.id !== id)
		);
	};

	const editTask = (id, newTitle) => {
		setTasks(prev =>
			prev.map(task =>
				task.id === id
					? { ...task, title: newTitle }
					: task
			)
		);
	};



	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);


	return (
		<div className="app">
			<h1>Kanban Board</h1>
			<AddTask onAddTask={handleAddTask} />
			<Board
				tasks={tasks}
				onChangeStatus={changeStatus}
				onDeleteTask={deleteTask}
				onEditTask={editTask}
			/>
		</div>
	)
}

export default App




import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";



export function useBoard() {

	const [tasks, setTasks] = useLocalStorage("tasks", [
		{ id: 1, title: "Example task", status: "ToDo" }
	]);


	const [draggedTask, setDraggedTask] = useState(null);

	function handleAddTask(title) {
		const newTask = {
			id: Date.now(),
			title,
			status: "ToDo",
		}
		setTasks(prevTasks => [...prevTasks, newTask])
	}

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

	const changeStatus = (id, newStatus) => {
		setTasks(prev =>
			prev.map(task =>
				task.id === id
					? { ...task, status: newStatus }
					: task
			)
		);
	};

	const handleDragStart = (task) => {
		setDraggedTask(task);
	};

	const handleDrop = (newStatus) => {
		if (!draggedTask) return;
		changeStatus(draggedTask.id, newStatus);
		setDraggedTask(null);
	};


	return {
		tasks,
		handleAddTask,
		onDeleteTask: deleteTask,
		onEditTask: editTask,
		onChangeStatus: changeStatus,
		onDragStart: handleDragStart,
		onDrop: handleDrop,
	};

}

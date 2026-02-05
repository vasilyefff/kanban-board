import { useBoard } from "./hooks/useBoard";
import AddTask from './components/AddTask/AddTask'
import Board from './components/Board/Board'

function App() {
	const board = useBoard();

	return (
		<div className="app">
			<h1>Kanban Board</h1>
			<AddTask onAddTask={board.handleAddTask} />
			<Board {...board} />
		</div>
	)
}

export default App




import Column from "../Column/Column"
import { STATUSES } from "../../constants/statuses";
import styles from "./Board.module.css"


export default function Board({ tasks, onChangeStatus, onDeleteTask }) {

	return (
		<div className={styles.board}>
			{STATUSES.map(status => (
				<Column
					key={status}
					status={status}
					tasks={tasks}
					onChangeStatus={onChangeStatus}
					onDeleteTask={onDeleteTask}
				/>
			))}
		</div>
	)
}

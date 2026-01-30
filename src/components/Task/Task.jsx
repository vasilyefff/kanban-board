import { STATUSES } from "../../constants/statuses";
import styles from "./Task.module.css"

export default function Task({ task, onChangeStatus, onDeleteTask }) {
	const currentIndex = STATUSES.indexOf(task.status);
	const isFirst = currentIndex === 0;
	const isLast = currentIndex === STATUSES.length - 1;

	const moveForward = () => {
		const nextStatus = STATUSES[currentIndex + 1];

		if (nextStatus) {
			onChangeStatus(task.id, nextStatus);
		}
	};

	const moveBackward = () => {
		const prevStatus = STATUSES[currentIndex - 1];

		if (prevStatus) {
			onChangeStatus(task.id, prevStatus);
		}
	};

	return (
		<div className={styles.task}>
			<div className={styles.actions}>
				{!isFirst && (
					<button
						className={styles.btn}
						onClick={moveBackward}
						aria-label="Переместить влево"
					>
						⬅
					</button>
				)}

			</div>

			<span className={styles.title}>{task.title}</span>

			<div className={styles.actions}>
				{!isLast && (
					<button
						className={styles.btn}
						onClick={moveForward}
						aria-label="Переместить вправо"
					>
						➡
					</button>
				)}

				<button
					className={`${styles.btn} ${styles.delete}`}
					onClick={() => onDeleteTask(task.id)}
					aria-label="Удалить задачу"
				>
					❌
				</button>
			</div>
		</div>
	);
}

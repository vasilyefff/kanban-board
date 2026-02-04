import { useState } from "react";
import { STATUSES } from "../../constants/statuses";
import styles from "./Task.module.css";

export default function Task({ task, onChangeStatus, onDeleteTask, onEditTask, onDragStart }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(task.title);

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

	const startEdit = () => {
		setEditText(task.title);
		setIsEditing(true);
	};

	const handleSave = () => {
		const trimmed = editText.trim();
		if (!trimmed) return;

		onEditTask(task.id, trimmed);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setEditText(task.title);
		setIsEditing(false);
	};

	return (
		<div className={styles.task}
			draggable
			onDragStart={() => onDragStart(task)}
		>
			<div className={styles.actions}>
				{!isEditing && !isFirst && (
					<button
						className={styles.btn}
						onClick={moveBackward}
						aria-label="Переместить влево"
					>
						⬅
					</button>
				)}
			</div>

			{!isEditing && (
				<span className={styles.title}>{task.title}</span>
			)}

			{isEditing && (
				<input
					className={styles.input}
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
					autoFocus
					onKeyDown={(e) => {
						if (e.key === "Enter") handleSave();
						if (e.key === "Escape") handleCancel();
					}}
				/>
			)}

			<div className={styles.actions}>
				{!isEditing && !isLast && (
					<button
						className={styles.btn}
						onClick={moveForward}
						aria-label="Переместить вправо"
					>
						➡
					</button>
				)}

				{!isEditing && (
					<button
						className={styles.btn}
						onClick={startEdit}
						aria-label="Редактировать задачу"
					>
						✏️
					</button>
				)}

				{!isEditing && (
					<button
						className={`${styles.btn} ${styles.delete}`}
						onClick={() => onDeleteTask(task.id)}
						aria-label="Удалить задачу"
					>
						❌
					</button>
				)}
			</div>

			{isEditing && (
				<div className={styles.editActions}>
					<button
						className={styles.btn}
						onClick={handleSave}
						aria-label="Сохранить"
					>
						💾
					</button>
					<button
						className={styles.btn}
						onClick={handleCancel}
						aria-label="Отменить"
					>
						✖
					</button>
				</div>
			)}
		</div>
	);
}

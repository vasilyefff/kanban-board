import { STATUSES } from "../../constants/statuses";

export default function Task({ task, onChangeStatus }) {
	const currentIndex = STATUSES.indexOf(task.status);

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
		<div>
			<button onClick={moveBackward}>⬅</button>

			{task.title}

			<button onClick={moveForward}>➡</button>
		</div>
	);
}

import Column from "../Column/Column"
import { STATUSES } from "../../constants/statuses";


export default function Board({ tasks, onChangeStatus }) {

	return (
		<div>
			{STATUSES.map(status => (
				<Column
					key={status}
					status={status}
					tasks={tasks}
					onChangeStatus={onChangeStatus}
				/>
			))}
		</div>
	)
}

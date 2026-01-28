import { useState } from "react"

export default function AddTask({ onAddTask }) {
	const [text, setText] = useState("")

	function handleSubmit() {
		if (!text.trim()) return
		onAddTask(text)
		setText("")
	}

	return (
		<div>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSubmit()
					}
				}}
				placeholder="Введите задачу"
			/>
			<button onClick={handleSubmit}>Добавить</button>
		</div>
	)

}
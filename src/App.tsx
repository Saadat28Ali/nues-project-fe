import sendTextInput from "./req/backend";
import { useState } from "react";

function App({}: {}) {

	const [label, setLabel] = useState<String>("");
	const [score, setScore] = useState<String>("");

	async function submitTextInput(event: any) {
		// Do something
		let text_type_input: HTMLInputElement | null = document.getElementById("textual_input");
		if (text_type_input === null) {
			console.log("Could not get element by ID: textual_input");
			return;
		}
		let result: Object = await sendTextInput(text_type_input.value);
		for (let item of result) {
			for (let key in item) {
				console.log(`${key}: ${item[key]}`);
			}
			console.log("");
		}
		setLabel(result[0].label);
		setLabel(result[0].score);
	}
	return (
		<div className="App">
			<input type="text" id="textual_input" />
			<button type="submit" onClick={submitTextInput}> Submit </button>
			<div className="results center-y">
				label: {label}, score: {score}
			</div>
		</div>
	);
}

export default App;

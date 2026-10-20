import sendTextInput from "./req/backend";
import { useState } from "react";
import "./App.css";

function App({}: {}) {

	const [label, setLabel] = useState<String>("");
	const [score, setScore] = useState<String>("");

	async function submitTextInput(_: any) {
		// Do something
		let text_type_input: HTMLInputElement | null = document.getElementById("textual_input") as HTMLInputElement | null;
		if (text_type_input === null) {
			console.log("Could not get element by ID: textual_input");
			return;
		}
		let result: Array<any> = await sendTextInput(text_type_input.value ? text_type_input.value : "");
		for (let item of result) {
			for (let key in item) {
				console.log(`${key}: ${item[key]}`);
			}
			console.log("");
		}
		setLabel(result[0].label);
		setScore(result[0].score);
	}
	return (
		<div className="App">
			<div className="panel">
				<label className="visually-hidden" htmlFor="textual_input">
					Text to submit
				</label>
				<div className="input-row">
					<input
						type="text"
						id="textual_input"
						placeholder="Type or paste your text here"
						autoComplete="off"
					/>
					<button type="submit" onClick={submitTextInput}> Submit </button>
				</div>
				<div className="results center-y" aria-live="polite">
					<div className="readout">
						<span className="readout-name">label</span>
						<span className="readout-value">{label || "–"}</span>
					</div>
					<div className="readout">
						<span className="readout-name">score</span>
						<span className="readout-value readout-score">{score || "–"}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

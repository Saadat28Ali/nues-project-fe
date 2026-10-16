async function sendTextInput(
	input: String
): Object {
	let form_data: FormData = new FormData();
	form_data.append("input_text", input);

	let result: any = await fetch(import.meta.env.VITE_BACKEND_URL + "/run_model", {
		method: "post",
		headers: {
			"ngrok-skip-browser-warning": "true"
		},
		body: form_data,
	});
	result = await result.json();
	return result;
}

export default sendTextInput;

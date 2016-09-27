export function handleServerError(json) {
	if (json.errors) {
		console.log('fail', json.errors);
		throw new Error(json.message);
	}
}

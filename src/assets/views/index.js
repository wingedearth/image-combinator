/**
 * Page Template
 * @param {string} markup - initial state markup
 * @param {object} initialStateData -
 */
export default function (markup, initialStateData) {
	const initialState = JSON.stringify(initialStateData);
	const { title } = initialStateData.mainStore;

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>${title}</title>
				<link rel="stylesheet" href="app.css">
			</head>
			<body>
				<div id="main">${markup}</div>
				<script type="text/javascript" src="app.js"></script>
				<script>window.__INITIAL_STATE = ${initialState}</script>
			</body>
		</html>`;
}

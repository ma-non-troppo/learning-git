const http = require('http');
const fs = require('fs');
const md = require('markdown-it')();

const port = 3000;

// TODO HTML 처리를 조금더 보완할 필요가 있음
function toHtml(markdown) {
	return `
		<DOCTYPE html>
		<html lang="ko">
		<head>
			<meta charset="utf-8">
		</head>
		<body>
		${md.render(markdown)}
		</body>
		</html>`;
}

http.createServer((request, response) => {
	console.log('Request received.');
	
	fs.readFile('view/README.md', 'utf8', (error, data) => {
		console.log('Read file - README.md');
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(toHtml(data));
		response.end();
	});
	
}).listen(port);

console.log(`Server has stared - port:${port}`);

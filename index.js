const http = require('http');
const fs = require('fs');

const port = 3000;

http.createServer((request, response) => {
	console.log('Request received.');

	fs.readFile('view/README.md', (error, data) => {
		console.log('Read file - README.md');
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	});
}).listen(port);

console.log(`Segrver has stared - port:${port}`);

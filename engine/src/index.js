const http = require('http');
const fs = require('fs')
require('dotenv').config();

const server = http.createServer((req, res)=>{
	if(req.url === '/src/main.js'){
		fs.readFile('./../src/main.js', {encoding: 'utf8'}, (err, data)=>
		{
			if(err) throw err;
			res.writeHead(200, {'Content-Type': 'text/javascript'})
			res.end(data);
		})
	}
	if(req.url == '/' && req.method == 'GET'){
		fs.readFile('./../public/index.html', {encoding: 'utf8'}, (err, data)=>
		{
			if(err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end(data);
		})
	}
})

const { PORT, HOSTNAME } = process.env;
server.listen(PORT, HOSTNAME, ()=>{
	console.log(`Connected to ${HOSTNAME}:${PORT}`);
})
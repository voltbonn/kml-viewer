var st = require('st')
var http = require('http')

const port = 3000

console.log(`serving on http://localhost:${port} in ${__dirname}`)
http.createServer(st(__dirname)).listen(port)

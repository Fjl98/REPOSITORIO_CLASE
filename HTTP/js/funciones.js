const http = require("http");


const server = http.createServer(function(req,res) {
    res.write('<h1>Hola desde el servidor</h1>');
    res.write('<p>hola que pasa</p>');  
    res.end();
});

server.listen(3000,function() {
    console.log("nos vemos en el puerto");
});
/*http.createServer(function(req,res) {
    res.write('<h1>Hola desde el servidor</h1>');
    res.write('<p>hola que pasa</p>');
    
    res.end();
}).listen(3000);*/
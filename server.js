const http = require('http');


    http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'text/plain'});

        const url = req.url;

        if (url === "hopar") {res.end("barev hopar")}
        if (url === "vzgo") {res.end("barev vzgo")}
        if (url === "qeri") {res.end("barev qeri")}
        if (url === "horqur") {res.end("barev horqur")}
        if (url === "bro") {res.end("barev bro")}

    }).listen(3001);
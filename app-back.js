
const http = require('http');

http.createServer((req, res) => {

    console.log(req);

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.cvs');
    res.writeHead(200, {'Content-Type': 'application/cvs'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Rafael'
    // }
    // res.write(JSON.stringify(persona));
    
    res.write('id, nombre\n');
    res.write('1, Rafael\n');
    res.write('2, Candela\n');
    res.write('3, Carinan\n');
    res.write('4, Mailen\n');


    res.end();
})
.listen(8080);

console.log('Escuchando en puerto: ', 8080);

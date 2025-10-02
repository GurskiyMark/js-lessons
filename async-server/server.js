/*Два маршрута:
GET /home — асинхронно читать и возвращать home.html в ответе.
GET /about — асинхронно читать и возвращать about.html в ответе.
Все операции I/O — только асинхронные, через промисы.

Промисификация:
Реализовать обёртку readFilePromise(path) над fs.readFile.
Реализовать delay(ms) — промис, резолвящийся через заданное время (обёртка над setTimeout).
Использовать delay для искусственной задержки перед чтением файлов (например, 1000–2000 мс).
Любая ошибка (файл не найден, сбой чтения и т. д.) → ответ с 500 и текстом «Ошибка сервера».
response.end() вызывается только после полного завершения delay и чтения файлов.
*/

import http from 'http';
import {promises as fs} from 'fs';

function readFilePromise (path){
    return fs.readFile(path, 'utf-8')
}

function delay (ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

const server = http.createServer(async (request, response)=> {
    
    try {
        if(request.method === 'GET'){
            if(request.url === '/home'){
                await delay(1000)
                const data = await readFilePromise('home.html')
                response.end(data);

            } else if(request.url === '/about'){
                await delay(2000)
                const data = await fs.readFile('about.html', 'utf-8');
                response.end(data)
            } else {
                     
                response.statusCode = 404;
                response.end('Page not found')
            }
        }


    } catch (err) {
        console.log('ошибка сервера при запросе:', err);
        
        response.statusCode = 500
        response.end('Server Error')
    }

});

server.listen(3000)
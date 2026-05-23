import {createServer} from 'http'; 

const port = 8080;

const app = createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"});
res.write("<h1>Welcome to http web server</h1>");
res.write("<h2>Web Dev is fun to learn!!</h2>")
res.write("<h3>Web Dev is fun to learn!!</h3>")
res.write("<p>Bye from the server</p>")
}); 

app.listen(port,(err)=>{
    if(err) console.log("error in server starting"); 
    console.log("HTTP web server is running at port: "+port);
});
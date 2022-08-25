
  let myhttp=require("http");
let myserver= myhttp.createServer(
  function(myrequest, myresponse){
  console.log(myrequest.url);
  myresponse.writeHead(200, {"Content-Type": "text/plain"})
  myresponse.end("Hello Everyone!\n");
}
);
console.log("server has started");
myserver.listen(8080, "0.0.0.0");
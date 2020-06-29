//import express, { Request, Response, NextFunction } from 'express'




const http = require('http');

const server = http.createServer(function(req, res){

    res.setHeader("Content-type", "application/json");
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200); //OK!

    let dataObj = {"Greeting":"Hello"};
    let data = JSON.stringify(dataObj);
    res.end(data);

});
server.listen(1111, function(){
    console.log('listening on port 1111'); })
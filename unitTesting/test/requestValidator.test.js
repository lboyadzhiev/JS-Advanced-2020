const expect = require('chai').expect;

function httpRequest(request) {
   
   let methods = ['POST', 'GET', 'DELETE', 'CONNECT'];
   let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
   let uriReg = /^([A-Za-z0-9.]+)$|\*/gm;
   let message = /^([^<>\\&'"]*)$|/gm;

   if(!methods.includes(request.method)) {
      throw new Error('Invalid request header: Invalid Method');
   } else if(!request.uri.match(uriReg)) {
      throw new Error('Invalid request header: Invalid URI');
   } else if(!versions.includes(request.version)) {
      throw new Error('Invalid request header: Invalid Version');
   } else if(!request.message.match(message)) {
      throw new Error('Invalid request header: Invalid Message');
   } else {
      console.log(request);
   }
}






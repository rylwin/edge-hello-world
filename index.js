var edge = require('edge');

var helloMethod = edge.func({
  assemblyFile: 'Hello.dll',
  typeName: 'Hello.Hello',
  methodName: 'SayHello'
});

helloMethod(null, function(error, result) { });

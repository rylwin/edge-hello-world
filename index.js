var edge = require('edge');

var helloMethod = edge.func({
  assemblyFile: 'Hello.dll',
  typeName: 'Hello',
  methodName: 'Hello'
});

helloMethod();

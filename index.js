function receivesAFunction(func){
    return func();
}

function call(){return console.log("call back");}
receivesAFunction(call);

function returnsANamedFunction(){
 return call;
}

function returnsAnAnonymousFunction(){
 return function(){console.log("anonymous function called")};
}
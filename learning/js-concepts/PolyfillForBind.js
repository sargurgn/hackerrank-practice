const nameObj = {
    firstname: 'narasimhan',
    lastname: 'gopinath'
}

const printName = function(...arg) {
    console.log(this.firstname + ' ' + this.lastname)
    console.log(' arguements ', arg);
}

const myfunction1 = printName.bind(nameObj, 'operations');
myfunction1('synamedia');

Function.prototype.myBind = function(...args) {
    let functionRef = this; // this is pointing to the function that is invoking myBind
    const thisObjRef = args[0]; // first arg is the reference of this inside the function to be invoked
    const argsToFunction = args.splice(1); // other arguements
    return function(...args2) { // if the function to be invoked is expecting some args, recive them here
        functionRef.apply(thisObjRef, [...argsToFunction, ...args2]); // combine args sent to myBind as well as args while invoking the bound function.
    }
}
const myfunction2 = printName.myBind(nameObj, 'operations');
myfunction2('synamedia');

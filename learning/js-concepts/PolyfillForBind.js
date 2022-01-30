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
    let functionRef = this;
    const thisRef = args[0];
    const restOfArgs = args.splice(1);
    return function(...args2) {
        functionRef.apply(thisRef, [...restOfArgs, ...args2]);
    }
}
const myfunction2 = printName.myBind(nameObj, 'operations');
myfunction2('synamedia');

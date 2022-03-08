// Call
const nameObj = {
    firstName: 'Narasimhan',
    lastName: 'Gopinath'
}
const nameObj2 = {
    firstName: 'Shruthi',
    lastName: 'Kolkur'
}
const printFullName = function (...args) {
    console.log(this.firstName + ' ' + this.lastName + ' args:: ' + args);
}
printFullName.call(nameObj, 'Bangalore', 'Karnataka');
printFullName.call(nameObj2, 'Bangalore', 'Karnataka');

// Apply
printFullName.call(nameObj, ['Bangalore', 'Karnataka']);
printFullName.call(nameObj2, ['Bangalore', 'Karnataka']);

// Bind
const boundFn1 = printFullName.bind(nameObj, ['Bangalore', 'Karnataka']);
const boundFn2 = printFullName.bind(nameObj2, ['Bangalore', 'Karnataka']);
boundFn1();
boundFn2();

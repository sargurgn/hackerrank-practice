function Employee(title) {
    this.title = title;
}

Employee.prototype.getTitle = function() {
    return this.title;
}
Employee.prototype.setTitle = function(title) {
    this.title = title;
}

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Employee;


Engineer.prototype.getIsManager = function() {
    return this.isManager;
}
Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
}

function main() {
    var eng = new Engineer('Developer', false)
    console.log('Title ' +  eng.getTitle() + ' isManger ' + eng.getIsManager())
}
main()
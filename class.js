//let _age = new WeakMap();

class Employee{
    constructor(a,name,yearofjoining){
        
        //  let _age=Symbol();
        //  this[_age]=a
        this.name=name;
        this.yearofjoining=yearofjoining;
        
    }
    service(){
        let date=new Date();
        return date.getFullYear()-this.yearofjoining;
    }
    
    //getter
    // get getName(){
    //     return "Employee name:"+this.name;
    // }

    // set name(newName) {
    //     newName = newName.trim();
    //     if (newName === '') {
    //         throw' Kindly enter an Employee name';
    //     }
    //     this._name = newName;
    // }

    // static hello(x){
    //     return "Hello!"+x.name;
    // }
    
    
}

// private property
// const c=new employee();
// console.log(c)
// console.log(c._age)

// let employee1=new employee('paul max');
// console.log(employee)

// class Admin extends Employee{
//     constructor(name,yearofjoining,company){
//         super(name,yearofjoining);
//         this.company=company;
//     }
// };


// const Employee1 = new Employee("Ram",2017,"amazon");
// const Admin2 = new Admin("Ravi",2018,);

//console.log(Employee1)
//console.log("years of service:"+Employee1.service() + " yearscompleted.");

//console.log(Employee1.getName); //getter


//console.log(Admin1);
//console.log(Admin2.service()+ " years")

//console.log(Employee.hello(Employee1))  //static




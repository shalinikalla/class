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
    //     return "employee name:"+this.name;
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

// class admin extends employee{
//     constructor(name,yearofjoining,company){
//         super(name,yearofjoining);
//         this.company=company;
//     }
// };


// const employee1 = new employee("Ram",2017,"amazon");
// const admin2 = new admin("Ravi",2018,);

//console.log(employee1)
//console.log("years of service:"+employee1.service() + " yearscompleted.");

//console.log(employee1.getName); //getter


//console.log(admin1);
//console.log(admin2.service()+ " years")

//console.log(employee.hello(employee1))  //static




{
    //type Alias

    type Student = {
    name: string;
    age:number;
    gender:string;
    ContactNo?:string;
    address :string;
}

const student1:Student={
    // ^? 
    name: "Mezba",
    age:50,
    gender: "Male",
    ContactNo: "0123456133",
    address: "ctg"
};

const student2:Student={
    name: "Mezbani",
    age:40,
    gender: "FeMale",
    address: "Dha"
};

const student3:Student={
    name: "Mezbani",
    age:40,
    gender: "FeMale",
    address: "Dha"
};

type UserName = string
const userName : UserName = "Baki"
//     ^? 

type Add = (num1: number,num2:number) => number;

const add:Add = (num1, num2) => num1+num2






    //
}
let sales: number = 123456789;
let course: string = "TypeScript";
let id_publish: boolean = true;

//*!                    Any type              */ 

//**  1. When we declare a variable and not initialise it the type of that variable becomes -- "ANY"    */

let value; // 

function render (docs: any) { // ** The type of docs is implicitly "ANY" as we have not explicitly or clearly said its type
    return docs; //** */ So, the complier is infering / guessing the type of this variable 
}


//*!                   Arrays                */

let number: number[] = [1, 2, 3]; 

let randomArray = [];
randomArray[0] = 1;
randomArray[1] = "2";
randomArray[2] = 3;
randomArray[3] = "4";

//*!                   Tupels                */

let user: [number, string] = [1, "dilip"]
user.push(2)
console.log(user)

//*!                   Enums  - we can define related constants               */

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size { Small = 1, Medium = 2, Large = 3 };

let mySize: Size = Size.Medium;                                                      

console.log(mySize);
                     

//*!                   Function                */ 

function newFunction(income: number, taxYear = 2022): number{
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

newFunction(10_000);
newFunction(10_000, 2023);

//*!                   Object                */ 

type types = { // type alias 
    readonly id: number, //* this will not let anyone change the vlaue of id 
    name: string,
    age?: number  //*/ this means the age be there or not 
    retire: (date: Date) => void
}

let employee: types = {id:123, name:"name", age:25, retire: (date: Date) => {console.log(date)}}
// employee.id = 456

console.log(employee.retire)

//*!                   Union Types                */ 


function kgToLbs(weight: number | string): number {

    //weight. as this will only let us using the methods which are common to string and number
    // * so we use "Narrowing"
    
    if (typeof weight == "number")
        return weight * 2.2;

    else{
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10)
kgToLbs("10kg")

//*!                   Intersection Types                */ 

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
   drag: () => {},
   resize: () => {}
}

//*!                   Literal Types                */ 

type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metrics = 'cm' | 'inch';
let metrics: Metrics = 'cm'

//*!                   Nullable Types                */ 

function greet (name: string | null | undefined) {
    if (name === "string")
        console.log(name.toUpperCase());
    else 
        console.log('Hola!')
}

greet(undefined)




#####this is a new day and i am pushing something very random just to maitain the streak 


#####this is a new day and i am pushing something very random just to maitain the streak 

#####this is a new day and i am pushing something very random just to maitain the streak 


#####this is a new day and i am pushing something very random just to maitain the streak 
#####this is a new day and i am pushing something very random just to maitain the streak 


#####this is a new day and i am pushing something very random just to maitain the streak 


//*!                   Nullable Types                */ 

function greet (name: string | null | undefined) {
    if (name === "string")
        console.log(name.toUpperCase());
    else 
        console.log('Hola!')
}

greet(undefined)
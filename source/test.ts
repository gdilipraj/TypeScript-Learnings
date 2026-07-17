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
                          
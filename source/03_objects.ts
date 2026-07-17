
// it means email may be absent but if its present it will be string
// email : string | undefined (they both are not same as here it is mandatory) -> this is union 
type User ={
    id : string;
    name :  string;
    email? : string; 
    readonly createdAt : Date // can not be reassigned
}

const user1 : User = {id : "u01", name: "dilip", createdAt : new  Date()}

console.log(user1) 

type User2 = {
    email ? : string;
}

type User3 = {
    email : string | undefined;
}

const user2 : User | User2 = {email : "abc@gmail.com"}

// const user3 : User2 = {email : undefined}

type Count = {[key : string] : number}

type Count2 = Record<"likes" | "views" | "shares", number>;
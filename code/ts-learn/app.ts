interface IPeople{
    name:string,
    age:number,
    sex?:number,
    [key:string]:any
}

let user:IPeople ={
    name:"zhangsan",
    age:12,
    address:"北京",
    0:11
}
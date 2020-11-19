interface People1{
    name:string
}
interface People2{
    age:number,
    name:number
}

type people = People1 & People2;

const s:people ={
    name:12,
    age:12,
}
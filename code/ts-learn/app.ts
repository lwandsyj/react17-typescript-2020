interface People{
    name:string,
    get_name():string;
    get_name2:()=>string;
}

let a :People ={
    name:"zhangsan",
    get_name():string{
        return this.name
    },
    get_name2:()=>{
        return this.name
        
    }
}
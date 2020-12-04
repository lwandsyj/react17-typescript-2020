interface IUser{
    name: string,
    age: number,
    sex:number
}

let user: IUser = { name: "name",age:100 } as IUser;
console.log(user.sex)
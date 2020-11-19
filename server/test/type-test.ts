class Student{
    private name:string;
    constructor(name:string){
        this.name=name;
    }

    getName():string{
        return this.name
    }
}

const stu:Student=new Student('张三');

 console.log(stu.getName())
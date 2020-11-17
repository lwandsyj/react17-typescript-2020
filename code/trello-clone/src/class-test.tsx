import React from 'react'

interface Iprops{
    name:string
}

interface Istate{
    list:any[]
}

export class List extends React.Component<any,Istate>{

    state:Istate={
        list:[
            {
                name:"zhangsan",
                age:10
            },
            {
                name:"zhangsan",
                age:10
            }
        ]
    }

    render(){
        return (
            <ul>
                {
                    this.state.list.map(item=>{
                        return (
                            <li>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
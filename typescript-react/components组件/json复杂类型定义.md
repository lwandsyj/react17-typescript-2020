1. 碰到复杂类型的可能需要定义多个类型，比如:

        const appData: AppState = {
            lists: [
                {
                    id: "0",
                    text: "To Do",
                    tasks: [{ id: "c0", text: "Generate app scaffold" }]
                },
                {
                    id: "1",
                    text: "In Progress",
                    tasks: [{ id: "c2", text: "Learn Typescript" }]
                },
                {
                    id: "2",
                    text: "Done",
                    tasks: [{ id: "c3", text: "Begin to use static typing" }]
                }
            ]
        }

   我们可能需要拆成多个对项,每一个{} 定义成一个对象

        interface task{
            id:string,
            text:string
        }

        interface state{
            id:string,
            text:string,
            tasks:task[] // 或者Array<task>
        }

        interface AppState{
            list:Array<state> // 或者state[]
        }
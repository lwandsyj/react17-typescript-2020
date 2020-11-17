import React from 'react'

import ReactDOM from 'react-dom'
import {App,Test} from "./app"
import {List} from './class-test'

function RootApp(){
    let Commond:JSX.Element = <Test name="变量"></Test>
    
    return (
        <App name="hello 类型">
            <p>children</p>
            <p>{Commond}</p>
             <List></List>
        </App>
    )
}


ReactDOM.render(<RootApp/>,document.getElementById('root'));
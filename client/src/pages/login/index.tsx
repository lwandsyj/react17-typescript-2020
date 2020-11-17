import React from 'react'
import  './index.less'
import Spacer from '../../components/space'
export default ()=>{
    return (
        <div className="login">
            <div className="mask"></div>
            <div className="container">
                <div className="header">系统管理后台</div>
                <div className="form">
                    <div className="formItem">
                        <input />
                    </div>
                    <Spacer height="8px"></Spacer>
                    <div className="formItem">
                        <input />
                    </div>
                    <div className="button-row">
                        <button className="button">登录</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
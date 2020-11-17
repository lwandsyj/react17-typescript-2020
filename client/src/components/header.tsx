import React from 'react'
import {Link} from 'react-router-dom'
import './header.less'
export default () => {
    return (
        <div>
            <div className="header">
                <span className="iconfont iconnew logo"></span>

                <a data-to="/search" className="link-search">
                    <div className="header-search">
                        <span className="iconfont iconsearch"></span>
                        <i>搜索新闻</i>
                    </div>
                </a>

                <a data-to="/personal">
                    <span className="iconfont iconwode personal"></span>
                </a>
            </div>
        </div>
    )
}
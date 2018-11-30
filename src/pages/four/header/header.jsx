import React from "react";
import './header.scss'
export default function(){

        return (
            <div className="header">
                <div className="nav">
                    
                    <i className="iconfont icon-jiantou3"></i>
                    <span>我的聚美</span>
                    <i className="iconfont icon-shouye"></i>
                   
                </div>
                <div className="content">
                    <li>
                        <img src="../../assets/noportrait.png"/>
                    </li>
                    <li>
                        <span>注册</span>
                        <span>|</span>
                        <span>登录</span>
                    </li>
                </div>
            </div>
        )
    
}
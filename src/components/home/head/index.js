import React,{Component,Fragment} from "react";
import {Router as Route,NavLink} from "react-router-dom";
import {HeadWrapper} from "./styled";

export default class Head extends Component{
    render(){
        return (
            <HeadWrapper>
                <ul className="top">
                    <li><span className="iconfont icon-wode"></span></li>
                    <li>
                        <div className="search">
                        <NavLink to="/search" >
                            <span className="iconfont icon-sousuo"></span>
                            <span>请输入搜索内容</span>
                        </NavLink>
                        </div>
                    </li>
                    <li><span className="iconfont icon-tubiaozhizuomoban"></span></li>
                </ul>
            </HeadWrapper>
        )
    }
}
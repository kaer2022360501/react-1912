import React,{Component} from "react";
import {HomeWrapper} from "./styled";
import {NavLink} from "react-router-dom";
import Head from "@components/home/head";
import Banner from "@components/home/banner";
import HomeNav from "@components/home/homeNav";
export default class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <Head/>
                <Banner/>
                <HomeNav/>
            </HomeWrapper>
        )
    }
}
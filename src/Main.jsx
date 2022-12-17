import { Outlet,Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';

export default function Main(){
    return(
        <div>
            <div className="margin">
                Welcome To 오공시 
            </div>
            <div className="intro">저희 오공시는 당신의 공부효율을 높여줍니다!</div>
        </div>
    );
}
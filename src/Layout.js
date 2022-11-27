import { Outlet,Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
const Img=styled.img`
    width:70px;
    height:50px;
    position: relative;
    top:15px;
    left:100px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const Screen=styled.div`
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
export default function Layout(){
    return(
        <Screen> 
            <div className="header">
               <a href="/"><Img src='dijindaPark.png'/></a>
               <main><Outlet/></main>
            </div>
        </Screen>
    );
}
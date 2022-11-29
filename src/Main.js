import { Outlet,Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
const Screen=styled.div`
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
export default function Main(){
    return(
        <Screen> 
           <div>..</div>
        </Screen>
    );
}
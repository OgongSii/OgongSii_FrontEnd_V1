import { Outlet,Link } from "react-router-dom";
import styled from "styled-components";
import styledComponents from "styled-components";
import './App.css';
const Img=styled.img`
    width:70px;
    height:50px;
    position: relative;
    top:15px;
    left:100px;
`;
export default function Layout(){
    return(
        <div>
            <div className="header">
               <Link to={'./'}><Img src='dijindaPark.png'/></Link>
               <main><Outlet/></main>
            </div>
        </div>
    );
}
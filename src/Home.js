import { Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Banner from "./Banner";

const Li=styled.li`
    list-style-type : none;
    margin-right:50px;
`;

export default function Home(){
    return(
        <Banner/>
    );
}
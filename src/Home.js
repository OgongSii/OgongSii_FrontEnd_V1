import { Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';

const Li=styled.li`
    list-style-type : none;
    margin-right:50px;
`;
export default function Home(){
    return(
    <div className="header">
        <div className="position">
            <Li>
                <Link to='./timer' className="line">타이머</Link>
            </Li>
            <Li>   
                <Link to='./rank' className="line">랭킹</Link>
            </Li>
            <Li>
                <Link to='./login' className="line">로그인</Link>
            </Li>
            <Li>
                <Link to='./join' className="line">회원가입</Link>
            </Li>
        </div>
    </div>
    );
}
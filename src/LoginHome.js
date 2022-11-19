import { Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
const Li=styled.li`
    list-style-type : none;
    margin-right:50px;
`;
export default function LoginHome(){
    return(
        <div>
            <div className="position">
                <Li>
                    <Link to='./timer' className="line" target='_blank'>타이머</Link>
                </Li>
                <Li>   
                    <Link to='./rank' className="line">랭킹</Link>
                </Li>
                <Li>
                    <Link to='./mypage' className="line">마이페이지</Link>
                </Li>
            </div>
        </div>
    );
}
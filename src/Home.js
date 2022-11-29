import { Link, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import styled from "styled-components";
import './App.css';
import { tokenState } from "./atom/TokenState";
const Li=styled.li`
    list-style-type : none;
    margin-right:50px;
`;
const Nav=styled.nav`
    
`;
const Ul=styled.ul`
    list-style: none;
    display:flex;
    position:relative;
    top:20px;
`;
export default function Home(){
    const [token, setToken] = useRecoilState(tokenState);
    const logoutToken = () => {
        localStorage.removeItem('X-AUTH-TOKEN');
        setToken('');
    };    
    return(
        <RecoilRoot>
            <div>
                <div className="header">
                    <Nav>
                        <Ul>
                            <Li>
                                <Link to='./timer' className="line" target='_blank'>타이머</Link>
                            </Li>
                            <Li>   
                                <Link to='./rank' className="line">랭킹</Link>
                            </Li>
                            {token ? (
                                <Li><Link onClick={logoutToken} className="line">로그아웃</Link></Li>
                            ) : (
                                <>
                                <Li><Link to='./login' className="line">로그인</Link></Li>
                                <Li><Link to='./signup' className="line">회원가입</Link></Li>
                            </>
                            )}
                        </Ul>
                    </Nav>
                </div>
            </div>
        </RecoilRoot>
    );
}
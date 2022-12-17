import { Link, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import styled from "styled-components";
import './App.css';
import { tokenState } from "./atom/TokenState";
const Li=styled.li`
    
`;
const Nav=styled.nav`
    ul{
      display: flex;
      list-style:none;

      li+li{
        margin-left: 30px;
      }
  }
`;
const Ul=styled.ul`
    
`;
export default function Home(){
    const [token, setToken] = useRecoilState(tokenState);
    const logoutToken = () => {
        localStorage.removeItem('X-AUTH-TOKEN');
        setToken('');
    };    
    return(
        <RecoilRoot>
            <header className="header">
                <div className="contents">
                    <div>
                        로고
                    </div>

                    <Nav>
                        <Ul>
                            {token ? (
                                <>
                                    <Li><Link to='./timer' className="line" target='_blank'>타이머</Link></Li>
                                    <Li><Link to='./rank' className="line">랭킹</Link></Li>
                                    <Li><Link onClick={logoutToken} className="line">로그아웃</Link></Li>
                                </>
                            ) : (
                                <>
                                    <Li><Link to='./login' className="line">로그인</Link></Li>
                                    <Li><Link to='./signup' className="line">회원가입</Link></Li>
                                </>
                            )}
                        </Ul>
                    </Nav>
                </div>
            </header>
        </RecoilRoot>
    );
}
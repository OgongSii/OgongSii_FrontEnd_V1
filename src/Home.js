import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='./login'>로그인</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='./join'>회원가입</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='./timer'>타이머</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='./rank'>랭킹보러가기</Link>
                </li>
            </ul>
        </div>
    );
}
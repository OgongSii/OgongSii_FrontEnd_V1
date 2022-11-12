import styled from "styled-components"
import '../App.css';
const FourZeroFour=styled.h1`
    margin:50px auto;
    text-align:center;
`;

const Ha=styled.h1`
    font-size:150px;
`;

const Explicate=styled.h3`
    font-size:50px;
`;
export default function Error(){
    return(
        <div>
            <FourZeroFour>
                <Ha>404</Ha>
                <Explicate>페이지 제대로 쳐라잉!!</Explicate>
            </FourZeroFour>
        </div>
    )
}
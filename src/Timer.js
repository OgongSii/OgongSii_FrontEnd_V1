import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

const BackGround=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat:no-repeat;
    background-size: 300% 300%;
    background-image: linear-gradient(
        -45deg, 
        rgba(59,173,227,1) 0%, 
        rgba(87,111,230,1) 25%, 
        rgba(152,68,183,1) 51%, 
        rgba(255,53,127,1) 100%
    );  
    animation: AnimateBG 20s ease infinite;

    @keyframes AnimateBG { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`;
export default function Timer(){
    const [hour, setHour] = useState(padNumber(now.getHours(), 2));
    const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
    const [sec, setSec] = useState(padNumber(now.getSeconds(), 2));
    const interval = useRef(null);
    let now = new Date();
    const padNumber = (num, length) => {
        return String(num).padStart(length, '0');
    };

    useEffect(() => {
       interval.current = setInterval(() => {
        now = new Date();
        setHour(padNumber(now.getHours(), 2));
        setMin(padNumber(now.getMinutes(), 2));
        setSec(padNumber(now.getSeconds(), 2));
    }, 1000);
    // clean-up 함수 리턴!
        return () => clearInterval(interval.current);
    }, []);
    return(
        <BackGround>
            <div> {hour} : {min} : {sec}</div>
        </BackGround>
    )
}
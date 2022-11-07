import styled from 'styled-components';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Timer.css';

const BackGround=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat:no-repeat;
`;

const WhiteBar=styled.div`
    align-items:center;
    height:500px;
    width:800px;
    background-color:white;
    border-radius:1.2rem;
    margin:150px auto;
    text-align:center;
`;

const TextSet=styled.div`
    margin-top:120px;
`;

const Font=styled.div`
    font-size:150px;
    font-weight:bold;
`;

const Btn=styled.button`
    margin-right:15px;
    display:inline-block;
`;
export default function Timer(){
    const useCounter = (initialValue, ms) => {
        const [count, setCount] = useState(initialValue);
        const intervalRef = useRef(null);
        const start = useCallback(() => {
            if (intervalRef.current !== null) {
                return;
            }
            intervalRef.current = setInterval(() => {
                setCount(c => c + 1);
            }, ms);
        }, []);
        const stop = useCallback(() => {
            if (intervalRef.current === null) {
                return;
            }
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }, []);
        const reset = useCallback(() => {
            setCount(0);
            stop()
        }, []);
        return { count, start, stop, reset };
    }
    const [currentHours, setCurrentHours] = useState(0);
    const [currentMinutes, setCurrentMinutes] = useState(0);
    const [currentSeconds, setCurrentSeconds] = useState(0);
    const { count, start, stop, reset } = useCounter(0, 1000);

	// 타이머 기능
    const timer = () => {
        const checkMinutes = Math.floor(count / 60);
        const hours = Math.floor(count / 3600);
        const minutes = checkMinutes % 60;
        const seconds = count % 60;
        setCurrentHours(hours)
        setCurrentSeconds(seconds)
        setCurrentMinutes(minutes)
    }

    useEffect(timer, [count]);

    return(
        <div>
        <style>{'body { background-color: #FFCCE5; }'}</style>
        <BackGround>
            <WhiteBar> 
                <TextSet>
                    <Font>
                        {currentHours < 10 ? `0${currentHours}` : currentHours}:{
                        currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:{
                        currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
                    </Font>

                    <Btn onClick={start} className='btnset'>Start</Btn>
                    <Btn onClick={stop} className='btnset'>Stop</Btn>
                    <Btn onClick={reset} className='btnset'>Reset</Btn>
                </TextSet>
            </WhiteBar>
        </BackGround>
        </div>
    )
}
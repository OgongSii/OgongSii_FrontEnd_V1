import { useCallback, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Bg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #FFF5E4  0%,
    #FFC4C4 25%,
    #EE6983 51%,
    #850E35 100%
  );
  animation: AnimateBG 20s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const WhiteBar = styled.div`
  width: 650px;
  height: 620px;
  margin: 50px auto;
  background-color: white;
  border-radius: 1.2rem;
  align-items: center;
  justify-items: center;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`;
const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: 50px;
  position: relative;
  font-family: "work sans";
  left: 225px;
`;
const IdPass = styled.div`
  margin: 50px auto;
`;
const IdDesign = styled.input`
  color: black;
  outline: none;
  border:none;
  position: relative;
  left: 170px;
  margin: 70px 0 15px 0;
  font-family: "work sans";
  width: 300px;
  font-size: 18px;
  &::-webkit-input-placeholder{
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  &:hover::-webkit-input-placeholder,
  &:focus::-webkit-input-placeholder{
  opacity: 0;
  }
`;
const Border1 = styled.div`
  border-bottom: 3px solid black;
  width: 55%;
  position: relative;
  left: 150px;
`;

const Border2 = styled.div`
  border-bottom: 3px solid black;
  width: 55%;
  position: relative;
  left: 150px;
`;
const PasswordDesign = styled.input`
  font-family: "work sans";
  color: black;
  outline: none;
  margin: 50px 0 15px 0;
  border: none;
  position: relative;
  left: 170px;
  width: 300px;
  font-size: 18px;
  &::-webkit-input-placeholder{
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  &:hover::-webkit-input-placeholder,
  &:focus::-webkit-input-placeholder{
  opacity: 0;
  }
`;

const JoinBtn = styled.button`
  transition: opacity 0.25s ease-out;
  &:hover {
    opacity: 0.8;
  }
  color: black;
  font-size: 0.8rem;
  padding-bottom: 1.5rem;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 2.2rem;
  width: 300px;
  font-family: "work sans";
  background-repeat: no-repeat;
  background-size: 300% 300%;
  background-image: linear-gradient(450deg,
            #ff0000,
            #ff00c8,
            #7a00ff,
            #002bff,
            #00ffd5,
            #48ff00,
            #fffb00,
            #ff7300,
            #ff0000);
  animation: AnimateBG 20s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export default function Login() {
  const [input1,SetInput1]=useState('');
  const [input2,SetInput2]=useState('');
  const [input3,SetInput3]=useState('');

  const Id_onchange=useCallback(e=>{
    SetInput1(e.target.value);
  },[input1]);

  const Password_onchange=useCallback(e=>{
    SetInput2(e.target.value);
  },[input2]);

  const Password_onchange_check=useCallback(e=>{
    SetInput3(e.target.value);
  },[input3]);

  const onClick=useCallback(e=>{
    if(input1&&input2&&input3){
      axios.post("./check", {
        username: input1,
        password: input2
    })
    .then(function (response) {
        console.log('성공');
;    }).catch(function (error) {
        console.log('에러');
    }).then(function() {
        console.log('에에러');
    });
    }
    else alert('제대로 입력해주세요!');
    SetInput1('');
    SetInput2('');
    SetInput3('');
  },[input1,input2,input3]);
  
  return (
    <div>
      <Bg>
        <WhiteBar>
          <IdPass>
            <Title>회원가입</Title>
            <div><IdDesign type="text" placeholder="Enter your ID" name='username' value={input1} onChange={Id_onchange}/></div>
            <Border1 />
            <div><PasswordDesign type="password" placeholder="Enter your password" name='password' value={input2} onChange={Password_onchange}/></div>
            <Border2 />
            <div><PasswordDesign type="password" placeholder="Check your password" name='password_check' value={input3} onChange={Password_onchange_check}/></div>
            <Border2 />
            <JoinBtn type="submit" onClick={onClick}>회원가입</JoinBtn>
          </IdPass>
        </WhiteBar>
      </Bg>
    </div>
  );
}

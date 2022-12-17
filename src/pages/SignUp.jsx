import { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import '../App.css';

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;

const WhiteBar = styled.div`
  width: 650px;
  height: 620px;
  margin: 80px auto;
  background-color: white;
  border-radius: 1.2rem;
  align-items: center;
  justify-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen  and (max-width:768px){
    width: 550px;
    height: 650px;
  }
  @media screen  and (max-width:480px){
    width: 400px;
    height: 650px;
  }

`;
const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: 50px;
  position: relative;
  font-family: "work sans";
  left: 225px;
  @media screen  and (max-width:768px){
    left:200px;
    font-size:40px;
  }
  @media screen  and (max-width:480px){
    font-size:35px;
    left:135px;
  }
`;
const IdPass = styled.div`
  margin: 50px auto;
`;
const IdDesign = styled.input`
  color: black;
  outline: none;
  border: none;
  position: relative;
  left: 170px;
  margin: 70px 0 15px 0;
  font-family: "work sans";
  width: 300px;
  font-size: 18px;
  &::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  &:hover::-webkit-input-placeholder,
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  @media screen  and (max-width:768px){
    left:100px;
  }
  @media screen  and (max-width:480px){
    left:85px;
  }
`;
const Border1 = styled.div`
  border-bottom: 3px solid #9999FF;
  width: 55%;
  position: relative;
  left: 150px;
  bottom:60px;
  @media screen  and (max-width:768px){
    left:80px;
    width: 70%;
  }
  @media screen  and (max-width:480px){
    left:70px;
  }
`;

const Border2 = styled.div`
  border-bottom: 3px solid #9999FF;
  width: 55%;
  bottom:40px;
  position: relative;
  left: 150px;
  @media screen  and (max-width:768px){
    left:80px;
    width: 70%;
  }
  @media screen  and (max-width:480px){
    left:70px;
  }
`;
const Border3 = styled.div`
  border-bottom: 3px solid #9999FF;
  width: 55%;
  bottom:30px;
  position: relative;
  left: 150px;
  @media screen  and (max-width:768px){
    left:80px;
    width: 70%;
  }
  @media screen  and (max-width:480px){
    left:70px;
  }
`;
const PasswordDesign1 = styled.input`
  font-family: "work sans";
  color: black;
  outline: none;
  margin: 50px 0 15px 0;
  border: none;
  position: relative;
  bottom:50px;
  left: 170px;
  width: 300px;
  font-size: 18px;
  &::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  &:hover::-webkit-input-placeholder,
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  @media screen  and (max-width:768px){
    left:100px;
  }
  @media screen  and (max-width:480px){
    left:85px;
  }
`;
const PasswordDesign2 = styled.input`
  font-family: "work sans";
  color: black;
  outline: none;
  margin: 50px 0 15px 0;
  border: none;
  position: relative;
  bottom:40px;
  left: 170px;
  width: 300px;
  font-size: 18px;
  &::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  &:hover::-webkit-input-placeholder,
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  @media screen  and (max-width:768px){
    left:100px;
  }
  @media screen  and (max-width:480px){
    left:85px;
  }
`;


const JoinBtn = styled.button`
  transition: opacity 0.25s ease-out;
  &:hover {
    opacity: 0.8;
  }
  color: black;
  font-size: 1.1rem;
  padding-bottom: 1.5rem;
  margin-top: 50px;
  padding-top:25px;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  width: 300px;
  font-family: "work sans";
  background-repeat: no-repeat;
  bottom:40px;
  background-color:#9999FF;
  @media screen  and (max-width:768px){
    margin-top:80px;
  }
`;

const IdBtn=styled.button`
  width:12%;
  padding:8px;
  position: relative;
  left:150px;
  bottom:60px;
  background-color:#9999FF;
  border-radius:0.5rem;
  &:hover{
    opacity: 0.8;
  }
  @media screen  and (max-width:768px){
    left:155px;
    padding:8px;
  }
  @media screen  and (max-width:480px){
    left:125px;
  }
`;
export default function SignUp() {
  const [input1, SetInput1] = useState("");
  const [input2, SetInput2] = useState("");
  const [input3, SetInput3] = useState("");

  const Id_onchange = useCallback(
    (e) => {
      SetInput1(e.target.value);
    },
    [input1]
  );

  const Password_onchange = useCallback(
    (e) => {
      SetInput2(e.target.value);
    },
    [input2]
  );

  const Password_onchange_check = useCallback(
    (e) => {
      SetInput3(e.target.value);
    },
    [input3]
  );
  const onClick = async()=>{
    if (input1 && input2 && input3) {
      if (input2 === input3) {
        let data = {
          name : input1,
          password : input2,
        };
        try{
          const response= await axios.post("/api/auth/signUp", data);
           console.log(response);
        }
        catch(e){
          console.log(e);
        }
      }
      else alert("제대로 입력해주세요!");
      SetInput1("");
      SetInput2("");
      SetInput3("");
    }
  };
  return (
    <div>
      <style>{'body { background-color: #CCCCFF; }'}</style>
      <Bg>
        <WhiteBar className="fadein">
          <IdPass>
            <Title className="fadein">회원가입</Title>
            <div className="fadein">
              <IdDesign
                type="text"
                placeholder="Enter your ID"
                name="name"
                value={input1}
                onChange={Id_onchange}
              />
              <IdBtn>중복</IdBtn>
            </div>
            <Border1 className="fadein"/>
            <div className="fadein">
              <PasswordDesign1
                type="password"
                placeholder="Enter your password"
                name="password"
                value={input2}
                onChange={Password_onchange}
              />
            </div>
            <Border2 className="fadein"/>
            <div className="fadein">
              <PasswordDesign2
                type="password"
                placeholder="Check your password"
                name="password_check"
                value={input3}
                onChange={Password_onchange_check}
              />
            </div>
            <Border3 className="fadein"/>
            <JoinBtn type="submit" onClick={onClick} className="fadein">
              Sign In 
            </JoinBtn>
          </IdPass>
        </WhiteBar>
      </Bg>
    </div>
  );
}

import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "../App.css";
import { tokenState } from "../atom/TokenState";
import { textState } from "../atom/TextState";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;

const WhiteBar = styled.div`
  width: 650px;
  height: 600px;
  margin: 90px auto;
  background-color: white;
  border-radius: 1.2rem;
  align-items: center;
  justify-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: 50px;
  position: relative;
  font-family: "work sans";
  left: 245px;
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
  top:20px;
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
`;
const Border1 = styled.div`
  border-bottom: 3px solid #cc99ff;
  width: 55%;
  position: relative;
  left: 150px;
  bottom:50px;
`;

const Border2 = styled.div`
  border-bottom: 3px solid #cc99ff;
  width: 55%;
  position: relative;
  left: 150px;
  bottom:50px;
`;
const PasswordDesign = styled.input`
  font-family: "work sans";
  color: black;
  outline: none;
  margin: 70px 0 15px 0;
  border: none;
  position: relative;
  left: 170px;
  width: 300px;
  font-size: 18px;
  bottom:50px;
  &::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  &:hover::-webkit-input-placeholder,
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

const LoginBtn = styled.button`
  transition: opacity 0.25s ease-out;
  &:hover {
    opacity: 0.8;
  }
  color: black;
  font-size: 1.1rem;
  padding-bottom: 1.5rem;
  margin-top: 20px;
  padding-top: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  width: 300px;
  font-family: "work sans";
  background-repeat: no-repeat;
  background-color: #cc99ff;
`;
const Screen = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NotLogin = styled.div`
  margin-top: 30px;
  text-align: center;
`;
const IdBtn= styled.button`
  border:1px solid black;
  width:12%;
  padding: 8px 20px;
  position: relative;
  left:143px;
  bottom:40px;
  background-color:#cc99ff;
  border-radius:0.5rem;
  border:none;
  transition: opacity 0.25s ease-out;
  &:hover {
    opacity: 0.8;
  }
`;
export default function Login() {
  let params = new URLSearchParams(document.location.search);
  let code = params.get("code");

  const [input1, SetInput1] = useRecoilState(textState);
  //const [input2, SetInput2] =  useRecoilState(textState);
  //const [input1, SetInput1] =  useState('');
  const [input2, SetInput2] = useState("");
  const navigate = useNavigate();
  const [tokenData, setTokenData] = useState("");
  const [token, setToken] = useRecoilState(tokenState);

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
  const onClick = useCallback(
    (e) => {
      if (input1 && input2) {
        let data = {
          name: input1,
          password: input2,
        };
        axios
          .post("/api/auth/login", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            console.log(response);
            if (response.data) {
              localStorage.setItem("X-AUTH-TOKEN", response.data);
              console.log(response.data);
              setTokenData(localStorage.setItem("X-AUTH-TOKEN", response.data));
              setToken(localStorage.getItem("X-AUTH-TOKEN"));
              //sendToken();
            }
            // return (isLogin === true? <LoginHome/> : <Login/>);
          })
          .then(navigate("/"))
          .catch(function (error) {
            console.log(error);
            alert("ㅄㅋ");
          });
        SetInput1("");
        SetInput2("");
      } else alert("제대로 입력해주세요!");
    },
    [input1, input2]
  );
  useEffect(() => {
    if (code) {
      onClick();
    }
  }, [code]);

  // const onClick = async ()=>{
  //   if (input1 && input2) {
  //     try{
  //       let data = {
  //         name: input1,
  //         password: input2,
  //       };
  //       const response=await axios.post("/api/auth/login",data);
  //       console.log(response.data);
  //     }
  //     catch(e){
  //       console.log(e);
  //     }
  //   }
  // };

  return (
    <Screen className="wrap">
      <style>{"body { background-color: #E5CCFF; }"}</style>
      <Bg>
        <WhiteBar className="fadein">
          <IdPass>
            <Title className="fadein">로그인</Title>
            <div className="fadein">
              <IdDesign
                type="text"
                placeholder="Enter your ID"
                name="name"
                value={input1}
                onChange={Id_onchange}
              />
               <IdBtn className="fadein">중복</IdBtn>
            </div>
            <Border1 className="fadein" />
            <div className="fadein">
              <PasswordDesign
                type="password"
                placeholder="Enter your password"
                name="password"
                value={input2}
                onChange={Password_onchange}
              />
            </div>
            <Border2 className="fadein" />
            <LoginBtn type="submit" className="fadein" onClick={onClick}>
              Login
            </LoginBtn>
            <NotLogin className="fadein">
              <a href="./signup">회원가입</a>
            </NotLogin>
          </IdPass>
        </WhiteBar>
      </Bg>
    </Screen>
  );
}

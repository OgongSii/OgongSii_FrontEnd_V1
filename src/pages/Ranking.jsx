import axios from "axios";
import { useCallback, useState } from "react";
import styled from "styled-components";


const Form = styled.form`
  background-color: white;
  border-radius: 1rem;
  width:260px;
  height:250px;
  position: relative;
  top:100px;
  left:30px;
`;
const Input = styled.input`
  position: relative;
  left: 55px;
  bottom:15px;
  outline: none;
  width:150px;
`;
const Button = styled.button`
  margin-top:15px;
  font-size:15px;
  border:2px solid black;
  font-size:15px;
  &:hover{
    opacity: 0.8;
    background-color:black;
    color:white;
    border:3px solid #C0C0C0;
  }
`;
const Div = styled.button`
  font-size:14px;
  position: relative;
`;
export default function Ranking() {
  const [overtime, SetOverTime] = useState(true);
  const [cnt, SetCnt] = useState(0);
  const [hour, SetHour] = useState("");
  const [minute, SetMinute] = useState("");

  const onChange1 = useCallback(
    (e) => {
      SetHour(e.target.value);
    },
    [hour]
  );
  const onChange2 = useCallback(
    (e) => {
      SetMinute(e.target.value);
    },
    [minute]
  );

  const onClick = useCallback(
    (e) => {
      if (hour && minute) {
        let data = {
          h: hour,
          m: minute,
        };
        axios
          .post("/api/record/record", JSON.stringify(data), {
            headers: {
              "Content-Type": `application/json`,
            },
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      SetCnt(1);
      if (cnt === 1) {
        alert("한 번 밖에 등록할 수 없다.");
      } else if (!hour && !minute) {
        alert("공백입니다.");
      } else {
        alert("등록성공!");
        SetOverTime(!overtime);
      }
      console.log(overtime);
      console.log(cnt);
    },
    [overtime, cnt, hour, minute]
  );
  return (
    <div>
      <style>{"body { background-color: #C0C0C0; }"}</style>
      <div>
        <Form>
          <Div>공부한 시간</Div>
          {/*action="/record" method="post"*/}
          <Input
            type="number"
            value={hour}
            max="12"
            min="0"
            placeholder="몇시간임?ㅋㅋ"
            name="h"
            onChange={onChange1}
          />
          <Input
            type="number"
            value={minute}
            min="0"
            max="59"
            placeholder="몇분임?ㅋㅋ"
            name="m"
            step="10"
            onChange={onChange2}
          />
          <br />
          <Button type="submit" onClick={onClick}>
            제출
          </Button>
        </Form>
      </div>
    </div>
  );
}

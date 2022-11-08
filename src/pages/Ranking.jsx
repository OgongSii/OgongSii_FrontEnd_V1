import axios from "axios";
import { useCallback, useState } from "react";
import styled from "styled-components";

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  background-color: white;
  border-radius: 1rem;
`;
const Input = styled.input`
  position: relative;
  top: 15px;
  left: 45px;
  outline: none;
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
      <Bg>
        <Form>
          {/*action="/record" method="post"*/}
          <Input
            type="number"
            value={hour}
            max="12"
            min="0"
            placeholder="시"
            name="h"
            onChange={onChange1}
          />
          <Input
            type="number"
            value={minute}
            min="0"
            max="59"
            placeholder="분"
            name="m"
            step="10"
            onChange={onChange2}
          />
          <br />
          <button type="submit" onClick={onClick}>
            제출
          </button>
        </Form>
      </Bg>
    </div>
  );
}

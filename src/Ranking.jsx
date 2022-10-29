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
  background-size: 300% 300%;
  background-color: springgreen;
`;

const Form = styled.form``;
export default function Ranking() {
  const [overtime, SetOverTime] = useState(true);
  const [cnt,SetCnt]=useState(0);


  const onClick = useCallback((e) => {
      SetCnt(1);
      if(cnt===1) {
        alert('한 번 밖에 등록할 수 없다.');
      }
      else {
        alert('등록성공!');
        SetOverTime(!overtime);
      }
      console.log(overtime);
      console.log(cnt);
    },[overtime,cnt]);
  return (
    <div>
      <Bg>
        <Form>
          {/*action="/record" method="post"*/}
          <input type="number" max="12" min="0" placeholder="시" name="h" />
          <input type="number" min="0" max="59" placeholder="분" name="m" step="10"/>
          <br />
          <button type="submit" onClick={onClick}>제출</button>
        </Form>
      </Bg>
    </div>
  );
}

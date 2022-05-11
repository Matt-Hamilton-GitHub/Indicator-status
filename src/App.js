import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const [increase, setIncrease] = useState(0);

  return (
    <Wrapper>
      <IndicatorDiv>
        <Indicator value={increase}>
          <span>{increase}%</span>
        </Indicator>
      </IndicatorDiv>
      <Increase
        value={increase}
        onClick={() => {
          increase < 100 ? setIncrease(increase + 10) : setIncrease(increase);
        }}
      >
        +
      </Increase>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: #112b3c;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IndicatorDiv = styled.div`
  position: relative;
  display: flex;
  background: #efefef;
  margin-left: 15px;
  min-width: 80%;
  height: 40px;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: ${(props) => props.value}%;
  background: #f66b0e;

  span {
    position: absolute;
    left: 50%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Increase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #205375;
  width: 70px;
  height: 40px;
  margin-left: 15px;
  cursor: pointer;
  cursor: ${(props) => props.value === 100 && "unset"};
`;

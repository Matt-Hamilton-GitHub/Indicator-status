import "./styles.css";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <IndicatorDiv>
        <Indicator></Indicator>
        <Increase></Increase>
      </IndicatorDiv>
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
  text-align: center;
`;

const IndicatorDiv = styled.div`
  background: #f66b0e;
  min-width: 70%;
  min-height: 40px;
`;

const Indicator = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: #112b3c;
`;

const Increase = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: #112b3c;
`;

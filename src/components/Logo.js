import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function Logo() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <Circle>
            <MiniCircle />
          </Circle>
          <span>Spline</span>
        </Title>
      </Container>
    </Wrapper>
  );
}

export default Logo;

const Wrapper = styled.div`
  width: fit-content;
  background: linear-gradient(
    180deg,
    rgba(153, 160, 169, 0.5) 0%,
    #ffffff 100%
  );
  box-shadow: 4px 4px 20px rgba(142, 155, 174, 0.1);
  padding: 5px 5px 5px 0px;
  border-radius: 0px 40px 40px 0px;
`;

const Container = styled.div`
  background: linear-gradient(264.48deg, #734ee0 7.06%, #573ad9 31.71%);
  box-shadow: 0px 8px 10px rgba(95, 64, 220, 0.2),
    inset 0px 2px 4px rgba(255, 255, 255, 0.2);
  border-radius: 0px 40px 40px 0px;
  border: 0.5px solid;
  border-image-source: linear-gradient(
    143.97deg,
    rgba(0, 0, 0, 0.3) 20.26%,
    rgba(0, 0, 0, 0.4) 85.18%
  );
`;

const Title = styled(TextStyles.H2)`
  display: flex;
  color: #ffffff;
  padding: 12px 20px 12px 55px;

  span {
    color: #bebbff;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background: linear-gradient(180deg, #3116c7 0%, #a07bff 100%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 40px;
  margin: 2px 10px;
`;

const MiniCircle = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(180deg, #9a97ff 0%, #eee9fe 100%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 4px auto;
`;
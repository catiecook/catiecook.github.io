import { Flex, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const Carousel = styled(Flex)`
  height: 300px;
  overflow: hidden;
  justify-content: flex-end;
  background-color: #66868d;
  padding: 0 2rem;
`;

const ScrollContent = styled(Flex)`
  flex-direction: column;
  text-align: right;
  animation: scroll 15s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

const ScScrollText = styled(Text)`
  font-size: 2rem;
  font-weight: 100;
  color: #e3d2bf;
  background-color: #66868d;
`;

function SkillsScroller() {
  return (
    <Carousel>
      <ScrollContent>
        <ScScrollText>React</ScScrollText>
        <ScScrollText>TypeScript</ScScrollText>
        <ScScrollText>Product Management</ScScrollText>
        <ScScrollText>Design First Thinking</ScScrollText>
        <ScScrollText>Frontend Engineeringt</ScScrollText>
        <ScScrollText>Data Driven Development</ScScrollText>
        <ScScrollText>Customer Support</ScScrollText>
        <ScScrollText>Google Analytics</ScScrollText>
        <ScScrollText>Zero to One Product Development</ScScrollText>
        <ScScrollText>User Research</ScScrollText>
        <ScScrollText>Figma</ScScrollText>
      </ScrollContent>
    </Carousel>
  );
}

export default SkillsScroller;

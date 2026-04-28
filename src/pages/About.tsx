import { Flex, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

const ScText = styled(Text)`
  color: #e3d2bf;
  font-size: 1rem;
`;

const ScTitle = styled(Title)`
  color: #e3d2bf !important;
`;

const ScAboutContainer = styled(Flex)`
  flex-direction: column;
  max-width: 40rem;
  padding: 0 2rem 2rem;
`;
function About() {
  return (
    <ScAboutContainer>
      <ScTitle>Hi, I'm Catie!</ScTitle>
      <ScText>
        As a Technical Product Manager with over 7 years of experience spanning
        frontend engineering and product development, I've established a track
        record of delivering impactful digital products that drive measurable
        business outcomes. Based in Basalt, Colorado, I bring a unique blend of
        technical depth and strategic vision to product development.
        <ScText>
          My career path has been defined by leading high-performance teams at
          innovative startups and industry giants alike, consistently delivering
          results that exceed expectations—from increasing conversion rates by
          over 50% to boosting monthly GSV by 27%. My approach is rooted in
          design-firstdevelopment and data-driven decision making.
        </ScText>
        <ScText>
          Having conducted over 70 user interviews while simultaneously
          analyzing performance metrics, I've developed a sixth sense for
          identifying opportunities that drive both user satisfaction and
          business growth. This dual perspective allows me to bridge the
          communication gap between technical teams and business stakeholders,
          ensuring alignment around shared objectives.
        </ScText>
      </ScText>
    </ScAboutContainer>
  );
}

export default About;

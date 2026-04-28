import { Carousel, Flex, Space, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

const ScContentFlex = styled(Flex)`
  justify-content: center;
`;

const ScCarousel = styled(Carousel)`
  max-width: 70%;
  margin: 0 auto;
  min-height: 12rem;
  padding: 0 3rem 3rem;
`;

const ScTitle = styled(Title)`
  color: #66868d !important;
`;
const ScText = styled(Text)`
  color: #66868d !important;
  font-size: 1rem;
`;

const ScDescriptionContainer = styled(Flex)`
  margin: 0 2rem;
`;

function ExperienceCarousel() {
  return (
    <ScCarousel arrows infinite={true}>
      <ScContentFlex>
        <Space direction="vertical" align="center" size="middle">
          <ScTitle level={3}>Technical Product Manager @ FairComp</ScTitle>
          <ScDescriptionContainer>
            <ScText>
              Worked on a team that transformed how users access verified
              compensation data, negotiated salaries, practiced for interviews
              and evaluated offers. Launched multiple core features within a 9
              month period, collaborating across company teams utilizing a
              data-first approach.
            </ScText>
          </ScDescriptionContainer>
        </Space>
      </ScContentFlex>
      <div>
        <Title level={3}>Founding Frontend Engineer @ FairComp</Title>
      </div>
      <div>
        <Title level={3}>Product Manager @ Continuum</Title>
      </div>
      <div>
        <Title level={3}>Founding Engineer @ Continuum</Title>
      </div>
      <div>
        <Title level={3}>Frontend Engineer @ Amazon</Title>
      </div>
      <div>
        <Title level={3}>
          Systems Development Engineer @ Amazon Web Services
        </Title>
      </div>
      <div>
        <Title level={3}>Olympic Snowboard Judge @ The World</Title>
      </div>
    </ScCarousel>
  );
}

export default ExperienceCarousel;

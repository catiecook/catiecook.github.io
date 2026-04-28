import { Card, Col, Flex, Row, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const ScFlex = styled.div`
  background-color: #66868d !important;
`;

function ProjectsGrid() {
  return (
    <ScFlex>
      <Row>
        <Col span={12}>
          <Title level={4}>Continuum: Contract Builder</Title>
        </Col>
        <Col span={12}>
          <Title level={4}>FairComp: Email Animation Campaign</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Title level={4}>FairComp: Data Presentation</Title>
        </Col>
        <Col span={12}>
          <Title level={4}>Continuum: User Dashboard</Title>
        </Col>
      </Row>
    </ScFlex>
  );
}

export default ProjectsGrid;

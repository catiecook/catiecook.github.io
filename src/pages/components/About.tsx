import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Left = styled.div``;

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 1.5rem;
  border-top: 1px solid var(--light-gray);
  padding-top: 1.5rem;
`;

const Headline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--black);

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

const Right = styled.div`
  padding-top: 4.5rem;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const Bio = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  border-top: 1px solid var(--light-gray);
  padding-top: 2rem;
`;

const Stat = styled.div``;

const StatValue = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--black);
`;

const StatLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
  margin-top: 0.25rem;
`;

const About: React.FC = () => {
  return (
    <Section id="about">
      <Left>
        <SectionLabel>About Me</SectionLabel>
        <Headline>
          Technical depth meets <em>product vision.</em>
        </Headline>
      </Left>
      <Right>
        <Bio>
          Technical Product Manager with 8+ years spanning Amazon, early-stage
          startups, and secure government platforms. I specialize in 0→1
          building — the ambiguous work of figuring out what to build and why.
        </Bio>
        <Bio>
          I started as a software engineer (JS/TS, React, Rails, Python), which
          means I can go deep with eng teams, gut-check feasibility, and make
          smarter build-vs-buy calls without a translator.
        </Bio>
        <StatGrid>
          <Stat>
            <StatValue>8+</StatValue>
            <StatLabel>Years of experience</StatLabel>
          </Stat>
          <Stat>
            <StatValue>70+</StatValue>
            <StatLabel>User interviews conducted</StatLabel>
          </Stat>
          <Stat>
            <StatValue>✨</StatValue>
            <StatLabel>Proven conversion rate growth</StatLabel>
          </Stat>
          <Stat>
            <StatValue>🌠</StatValue>
            <StatLabel>Proven GSV growth</StatLabel>
          </Stat>
        </StatGrid>
      </Right>
    </Section>
  );
};

export default About;

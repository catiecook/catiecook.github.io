import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  padding-top: var(--nav-height);
`;

const HeroInner = styled.div`
  max-width: 1100px;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: clamp(3.5rem, 5vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  color: var(--black);
  margin-bottom: 2rem;

  em {
    font-style: italic;
    font-weight: 400;
    color: var(--accent);
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 300;
  color: var(--gray);
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 0.85rem 2rem;
  background-color: var(--accent);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--black);
  }
`;

const SecondaryLink = styled.a`
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--black);
  border-bottom: 1px solid var(--black);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <HeroSection>
        <HeroInner>
          <Eyebrow>Technical Product Manager &amp; Engineer</Eyebrow>
          <HeroTitle>
            Hi, I'm Catie — <br />
            <em>I like building products</em> <br />
            that matter.
          </HeroTitle>
          <HeroSubtitle>
            Technical Product Manager with 8+ years across Amazon, early-stage
            startups, and secure government platforms. I started as an engineer
            — so I can go deep with your tech team. Off the clock: Snowboard
            judge, ceramics hobbyist, and enthusiastic traveler.
          </HeroSubtitle>
          <HeroActions>
            <PrimaryButton href="#work">View My Work</PrimaryButton>
            <SecondaryLink href="#contact">Get in Touch</SecondaryLink>
          </HeroActions>
        </HeroInner>
      </HeroSection>
    </Wrapper>
  );
};

export default Hero;

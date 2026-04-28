import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

/* ── Background ── */
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Ombre: lavender → cream → deep lavender */
  background: linear-gradient(135deg, #bcb4ff 0%, #fffeec 50%, #8b82e8 100%);
`;

/* ── Stamp squiggle lines ── */
const StampLines = () => (
  <svg
    width="80"
    height="40"
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 12, 24].map((y) => (
      <path
        key={y}
        d={`M0 ${y + 6} Q10 ${y} 20 ${y + 6} Q30 ${y + 12} 40 ${
          y + 6
        } Q50 ${y} 60 ${y + 6} Q70 ${y + 12} 80 ${y + 6}`}
        stroke="#BCB4FF"
        strokeWidth="1.5"
        fill="none"
      />
    ))}
  </svg>
);

/* ── Slide-in keyframe: starts 30rem right of final position ── */
const slideIn = keyframes`
  from {
    transform: translate(30rem, -10rem);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const Card = styled.div<{ $visible: boolean }>`
  position: relative;
  background-color: #fffeec;
  border: 1.5px solid #e2e1d0;
  width: min(680px, 88vw);
  padding: 2.5rem 2.5rem 2.75rem;
  box-shadow: 8px 12px 40px rgba(0, 0, 0, 0.18);
  z-index: 2;

  /* Hidden off-screen (30rem right, 10rem up) until triggered */
  opacity: 0;
  transform: translate(30rem, -10rem);

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${slideIn} 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    `}
`;

const StampCorner = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const CardHeading = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 400;
  color: #141414;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.03em;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e2e1d0;
  margin-bottom: 2rem;
`;

const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const CardText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #5a5a50;
  line-height: 1.75;
`;

const VerticalRule = styled.div`
  width: 1px;
  align-self: stretch;
  min-height: 80px;
  background-color: #e2e1d0;
  justify-self: center;

  @media (max-width: 560px) {
    display: none;
  }
`;

const CardRight = styled.div`
  display: flex;
  justify-content: center;
`;

const MeetButton = styled.a`
  display: inline-block;
  padding: 0.65rem 1.5rem;
  border: 1px solid #141414;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #141414;
  font-family: "Inter", sans-serif;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #141414;
    color: #fffeec;
  }
`;

/* ── Decorative ombre photo panel ── */
const PhotoPanel = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 400px;
  border: 6px solid rgba(255, 255, 255, 0.6);
  box-shadow: 6px 10px 30px rgba(0, 0, 0, 0.2);
  background: linear-gradient(170deg, #bcb4ff 0%, #d8d4ff 50%, #141414 100%);
  z-index: 1;

  @media (max-width: 900px) {
    display: none;
  }
`;

const PostcardSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef}>
      {/* <PhotoPanel /> */}
      <Card $visible={visible}>
        <StampCorner>
          <StampLines />
        </StampCorner>
        <CardHeading>Oh, hi!</CardHeading>
        <Divider />
        <CardBody>
          <CardText>
            I'm Catie. Technical Product Manager, Software Engineer & Creative
            Tinkerer.
            <br /> <br />
            Based in Basalt, Colorado, unless I happen to be somewhere else. I'm
            all about building things that are impactful. Let's work together!
          </CardText>
          <VerticalRule />
          <CardRight>
            <MeetButton href="#about">Meet Catie</MeetButton>
          </CardRight>
        </CardBody>
      </Card>
    </Section>
  );
};

export default PostcardSection;

import React from "react";
import styled, { keyframes, css } from "styled-components";
import FeedbackGuessCard from "./FeedbackGuessCard";

/* ── Section & grid ── */
const Section = styled.section`
  padding: 7rem 3rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 4rem;
  border-top: 1px solid var(--light-gray);
  padding-top: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--black);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
`;

const CardWrapper = styled.article<{ $size: "large" | "small" }>`
  grid-column: ${({ $size }) => ($size === "large" ? "span 7" : "span 5")};
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 1000px) {
    grid-column: span 12;
  }
`;

const ImageContainer = styled.div<{ $bg: string; $tall?: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $tall }) => ($tall ? "unset" : "4 / 3")};
  min-height: ${({ $tall }) => ($tall ? "420px" : "unset")};
  overflow: hidden;
  background-color: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${CardWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const CardMeta = styled.div`
  margin-top: 1rem;
`;

const CardCategory = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 0.35rem;
`;

const CardTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--black);
  transition: color 0.2s ease;

  ${CardWrapper}:hover & {
    color: var(--accent);
  }
`;

/* ═══════════════════════════════════════
   1. CONTRACT BUILDER — arch bar chart
   ═══════════════════════════════════════ */
const growUp = keyframes`
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
`;

const ContractCardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContractSpotlight = styled.div`
  padding: 2rem 2rem 0;
  flex-shrink: 0;
`;

const ContractSpotlightLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(20, 20, 20, 0.5);
  margin-bottom: 0.75rem;
`;

const ContractSpotlightTitle = styled.div`
  font-family: "Playfair Display", serif;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 400;
  color: #141414;
  margin-bottom: 0;
  line-height: 1.4;

  em {
    font-style: italic;
    color: #fffeec;
  }
`;

const growRight = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;

const ArchBarsWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.9rem;
  padding: 1rem 0 2.5rem 0;
`;

const ArchBar = styled.div<{ $w: number; $bg: string; $delay: number }>`
  width: ${({ $w }) => $w}%;
  height: 68px;
  background: ${({ $bg }) => $bg};
  border-radius: 0 999px 999px 0;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0 1.5rem 0 2rem;
  transform-origin: left center;
  animation: ${css`
    ${growRight} 0.9s cubic-bezier(0.34, 1.1, 0.64, 1) forwards
  `};
  animation-delay: ${({ $delay }) => $delay}ms;
  transform: scaleX(0);
`;

const ArchValue = styled.div<{ $color: string }>`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  flex-shrink: 0;
  color: ${({ $color }) => $color};

  sup {
    font-size: 0.85rem;
    font-weight: 500;
    vertical-align: super;
  }
`;

const ArchLabel = styled.div<{ $color: string }>`
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  line-height: 1.4;
`;

const archBars = [
  {
    value: "35",
    label: "Project creation increase",
    w: 88,
    bg: "#141414",
    valueColor: "#BCB4FF",
    labelColor: "rgba(188,180,255,0.6)",
    delay: 200,
  },
  {
    value: "27",
    label: "Transaction volume lift",
    w: 68,
    bg: "#FFFEEC",
    valueColor: "#141414",
    labelColor: "rgba(20,20,20,0.5)",
    delay: 400,
  },
];

const ContractBuilderMetric: React.FC = () => (
  <ContractCardWrap>
    <ContractSpotlight>
      <ContractSpotlightLabel>Spotlight metric</ContractSpotlightLabel>
      <ContractSpotlightTitle>
        Redesigned core
        <br />
        <em>payments and contract flow</em> to unlock marketplace growth
      </ContractSpotlightTitle>
    </ContractSpotlight>
    <ArchBarsWrap>
      {archBars.map((bar) => (
        <ArchBar key={bar.label} $w={bar.w} $bg={bar.bg} $delay={bar.delay}>
          <ArchValue $color={bar.valueColor}>
            {bar.value}
            <sup>%</sup>
          </ArchValue>
          <ArchLabel $color={bar.labelColor}>{bar.label}</ArchLabel>
        </ArchBar>
      ))}
    </ArchBarsWrap>
  </ContractCardWrap>
);

/* ═══════════════════════════════════════
   2. SOCIAL CAMPAIGN — growth bar chart
   ═══════════════════════════════════════ */
const SocialCardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SocialSpotlight = styled.div`
  padding: 2rem 2rem 0;
  flex-shrink: 0;
`;

const GrowthWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 1.75rem 0;
`;

const GrowthBar = styled.div<{ $h: number; $bg: string; $delay: number }>`
  flex: 1;
  height: ${({ $h }) => $h}px;
  background: ${({ $bg }) => $bg};
  border-radius: 999px 999px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.2rem 0.65rem 0 2rem;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 1.2rem 0.65rem 0 3rem;
  }
  @media (max-width: 700px) {
    padding: 1.2rem 0.65rem 0 1.2rem;
  }
  transform-origin: bottom center;
  animation: ${css`
    ${growUp} 0.85s cubic-bezier(0.34, 1.05, 0.64, 1) forwards
  `};
  animation-delay: ${({ $delay }) => $delay}ms;
  transform: scaleY(0);
`;

const GrowthPeriod = styled.div<{ $color: string }>`
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: 0.3rem;
  white-space: nowrap;
`;

const GrowthValue = styled.div<{ $color: string }>`
  font-family: "Playfair Display", serif;
  font-size: clamp(1rem, 1.4vw, 1.3rem);
  font-weight: 700;
  line-height: 1;
  color: ${({ $color }) => $color};
`;

const growthBars = [
  {
    period: "Oct '23",
    value: "0",
    h: 72,
    bg: "rgba(255,254,236,0.08)",
    textColor: "rgba(255,254,236,0.4)",
    delay: 100,
  },
  {
    period: "Mid '24",
    value: "500K+",
    h: 160,
    bg: "#BCB4FF",
    textColor: "#141414",
    delay: 280,
  },
  {
    period: "Late '24",
    value: "2M+",
    h: 250,
    bg: "#E9FC87",
    textColor: "#141414",
    delay: 460,
  },
  {
    period: "2025",
    value: "4M+",
    h: 324,
    bg: "#FFFEEC",
    textColor: "#141414",
    delay: 640,
  },
];

const SocialCampaignMetric: React.FC = () => (
  <SocialCardWrap>
    <SocialSpotlight>
      <SpotlightLabel>Spotlight metric</SpotlightLabel>
      <SpotlightTitle>
        Grew social media campaign from 0 to <em>over 4 Million </em>
        views
      </SpotlightTitle>
    </SocialSpotlight>
    <GrowthWrap>
      {growthBars.map((bar) => (
        <GrowthBar key={bar.period} $h={bar.h} $bg={bar.bg} $delay={bar.delay}>
          <GrowthPeriod $color={bar.textColor}>{bar.period}</GrowthPeriod>
          <GrowthValue $color={bar.textColor}>{bar.value}</GrowthValue>
        </GrowthBar>
      ))}
    </GrowthWrap>
  </SocialCardWrap>
);

/* ═══════════════════════════════════════
   3. DATA PRESENTATION — before/after bars
   ═══════════════════════════════════════ */
const fillBar = (w: number) => keyframes`
  from { width: 0%; }
  to   { width: ${w}%; }
`;

const BarBlock = styled.div`
  width: 80%;
  padding: 0.5rem 0;
`;

const BarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.4rem;
`;

const BarLabelText = styled.span`
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 254, 236, 0.45);
`;

const BarLabelValue = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fffeec;
`;

const BarTrack = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 254, 236, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 1.25rem;
`;

const BarFill = styled.div<{ $pct: number; $delay: number }>`
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
  animation: ${({ $pct }) =>
    css`
      ${fillBar($pct)} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0}ms forwards
    `};
  animation-delay: ${({ $delay }) => $delay}ms;
  width: 0%;
`;

const SpotlightLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

const SpotlightTitle = styled.div`
  font-family: "Playfair Display", serif;
  font-size: clamp(1.5rem, 1.5vw, 1.1rem);
  font-weight: 400;
  color: #fffeec;
  margin-bottom: 1.75rem;
  line-height: 1.4;
  em {
    font-style: italic;
    color: var(--accent);
  }
`;

const spotlightBars = [
  { label: "Before: signup conversion", pct: 10, display: "10%", delay: 300 },
  { label: "After: signup conversion", pct: 86, display: "86%", delay: 500 },
  { label: "Feature utilization lift", pct: 45, display: "+45%", delay: 700 },
  { label: "Deployment time saved", pct: 75, display: "75%", delay: 900 },
];

const DataPresentationMetric: React.FC = () => (
  <BarBlock>
    <SpotlightLabel>Spotlight metric</SpotlightLabel>
    <SpotlightTitle>
      Onboarding redesign:
      <br />
      <em>10% → 86%</em> conversion
    </SpotlightTitle>
    {spotlightBars.map((bar) => (
      <React.Fragment key={bar.label}>
        <BarLabel>
          <BarLabelText>{bar.label}</BarLabelText>
          <BarLabelValue>{bar.display}</BarLabelValue>
        </BarLabel>
        <BarTrack>
          <BarFill $pct={bar.pct} $delay={bar.delay} />
        </BarTrack>
      </React.Fragment>
    ))}
  </BarBlock>
);

/* ═══════════════════════════════════════
   4. USER RESEARCH — feedback guess
   ═══════════════════════════════════════ */

/* ── Project data ── */
interface Project {
  id: number;
  title: string;
  category: string;
  bg: string;
  size: "large" | "small";
  tall?: boolean;
  content: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FairComp — Onboarding Redesign",
    category: "Product Management · UX",
    bg: "#141414",
    size: "large",
    tall: true,
    content: <DataPresentationMetric />,
  },
  {
    id: 2,
    title: "User Research",
    category: "Research · Discovery",
    bg: "#E9FC87",
    size: "small",
    tall: true,
    content: <FeedbackGuessCard />,
  },
  {
    id: 3,
    title: "Continuum — Contract Builder",
    category: "Product Management · Engineering",
    bg: "#BCB4FF",
    size: "small",
    tall: true,
    content: <ContractBuilderMetric />,
  },
  {
    id: 4,
    title: "FairComp — Social Campaign",
    category: "Content Strategy · Growth",
    bg: "#141414",
    size: "small",
    tall: true,
    content: <SocialCampaignMetric />,
  },
];

const Work: React.FC = () => {
  return (
    <Section id="work">
      <SectionHeader>
        <SectionTitle>Projects & Stats</SectionTitle>
      </SectionHeader>
      <Grid>
        {projects.map((project) => (
          <CardWrapper key={project.id} $size={project.size}>
            <ImageContainer $bg={project.bg} $tall={project.tall}>
              {project.content}
            </ImageContainer>
            <CardMeta>
              <CardCategory>{project.category}</CardCategory>
              <CardTitle>{project.title}</CardTitle>
            </CardMeta>
          </CardWrapper>
        ))}
      </Grid>
    </Section>
  );
};

export default Work;

import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

/* ── Bar fill animation ── */
const fillBar = (width: number) => keyframes`
  from { width: 0%; }
  to   { width: ${width}%; }
`;

/* ── Styles ── */
const Section = styled.section`
  padding: 7rem 3rem;
  background-color: var(--black);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 1.5rem;
  margin-bottom: 5rem;
`;

const SectionLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--cream);
`;

/* ── Metric grid ── */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-bottom: 5rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCell = styled.div`
  padding: 2.5rem 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:nth-child(3n) {
    border-right: none;
  }
`;

const MetricValue = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.75rem;
`;

const MetricSuffix = styled.span`
  font-size: 0.6em;
`;

const MetricLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
`;

const MetricSource = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.22);
  margin-top: 0.4rem;
  font-style: italic;
`;

/* ── Featured before/after visualization ── */
const Featured = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
`;

const FeaturedLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
`;

const FeaturedTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 400;
  color: var(--cream);
  margin-bottom: 2.5rem;

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

const BarRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const BarItem = styled.div``;

const BarMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const BarMetaLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.55);
`;

const BarMetaValue = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cream);
`;

const BarTrack = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  overflow: hidden;
`;

const BarFill = styled.div<{ $pct: number; $active: boolean; $delay?: number }>`
  height: 100%;
  border-radius: 3px;
  background-color: var(--accent);
  width: 0%;

  ${({ $active, $pct, $delay = 0 }) =>
    $active &&
    css`animation: ${fillBar($pct)} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}ms forwards;`}
`;

/* ── Data ── */
interface Metric {
  value: number;
  suffix: string;
  label: string;
  source: string;
}

const metrics: Metric[] = [
  { value: 86,  suffix: '%', label: 'Onboarding conversion rate',      source: 'FairComp — was 10%' },
  { value: 45,  suffix: '%', label: 'Feature utilization lift',         source: 'FairComp' },
  { value: 75,  suffix: '%', label: 'Deployment time reduced',          source: 'Amazon / AWS' },
  { value: 35,  suffix: '%', label: 'Project creation growth',          source: 'Continuum' },
  { value: 27,  suffix: '%', label: 'Transaction volume lift',          source: 'Continuum' },
  { value: 1,   suffix: 'M+', label: 'Organic video views, $0 ad spend', source: 'FairComp' },
];

const beforeAfterBars = [
  { label: 'Before: signup conversion', pct: 10,  display: '10%',  delay: 0 },
  { label: 'After: signup conversion',  pct: 86,  display: '86%',  delay: 200 },
  { label: 'Feature utilization lift',  pct: 45,  display: '+45%', delay: 400 },
  { label: 'Deployment time saved',     pct: 75,  display: '75%',  delay: 600 },
];

/* ── Single animated metric ── */
const AnimatedMetric: React.FC<{ metric: Metric; active: boolean }> = ({ metric, active }) => {
  const count = useCountUp(metric.value, 1400, active);
  return (
    <MetricCell>
      <MetricValue>
        {count}
        <MetricSuffix>{metric.suffix}</MetricSuffix>
      </MetricValue>
      <MetricLabel>{metric.label}</MetricLabel>
      <MetricSource>{metric.source}</MetricSource>
    </MetricCell>
  );
};

/* ── Main component ── */
const Metrics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef} id="impact">
      <SectionHeader>
        <SectionLabel>By the numbers</SectionLabel>
        <SectionTitle>Impact</SectionTitle>
      </SectionHeader>

      <Grid>
        {metrics.map((m) => (
          <AnimatedMetric key={m.label} metric={m} active={active} />
        ))}
      </Grid>

    </Section>
  );
};

export default Metrics;

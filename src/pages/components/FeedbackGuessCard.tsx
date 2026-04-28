import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

/* ── Blob-star SVG ── */
const BlobStar = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="
      M 53.5,28.5 C 54.5,23 55,13 50,12 C 45,11 45.5,23 46.5,28.5
      C 42,24.5 36,16 31.5,18.5 C 27,21 32.5,28.5 36.5,32.5
      C 31,31.5 21,31 20,36 C 19,41 29,42 34.5,42.5
      C 29.5,46 20,49 21,54 C 22,59 32,56.5 37,53.5
      C 34,59 29.5,68 34,71 C 38.5,74 43.5,65 46.5,59.5
      C 46.5,65 46,76 51,77 C 56,78 55.5,67 55.5,61
      C 59,66.5 63.5,75 68,72.5 C 72.5,70 68,61.5 64.5,56.5
      C 70,58.5 80,60 81,55 C 82,50 72.5,47.5 67,45.5
      C 72.5,43 82,41 81,36 C 80,31 70,33 64.5,35
      C 68,30 73.5,22 69.5,19 C 65.5,16 60,24.5 56.5,29.5
      C 56.5,29 53.5,28.5 53.5,28.5 Z
    "
    />
  </svg>
);

/* ── Sparkle animation ── */
const sparkleFall = keyframes`
  0%   { transform: translateY(-80px) rotate(0deg)   scale(0.6); opacity: 0; }
  12%  { opacity: 1; }
  80%  { opacity: 0.7; }
  100% { transform: translateY(110vh) rotate(300deg) scale(0.9); opacity: 0; }
`;

const SparkleEl = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  color: var(--accent);
  animation: ${sparkleFall} var(--dur) var(--delay) ease-in forwards;
`;

interface SparkleData {
  id: number;
  left: number;
  size: number;
  dur: number;
  delay: number;
}

function genSparkles(count = 30): SparkleData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 96,
    size: 16 + Math.random() * 30,
    dur: 1.8 + Math.random() * 2,
    delay: Math.random() * 1.4,
  }));
}

const SparkleLayer: React.FC<{ runKey: number }> = ({ runKey }) => {
  const sparkles = React.useMemo(() => genSparkles(), [runKey]);
  return ReactDOM.createPortal(
    <>
      {sparkles.map((s) => (
        <SparkleEl
          key={`${runKey}-${s.id}`}
          style={{
            left: `${s.left}%`,
            top: 0,
            width: s.size,
            height: s.size,
            ["--dur" as any]: `${s.dur}s`,
            ["--delay" as any]: `${s.delay}s`,
          }}
        >
          <BlobStar />
        </SparkleEl>
      ))}
    </>,
    document.body
  );
};

/* ── Card layout ── */
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const CardQuestion = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: clamp(1.5rem, 1.8vw, 1.3rem);
  font-weight: 400;
  color: #141414;
  line-height: 1.35;

  em {
    font-style: italic;
    color: #5a5a50;
  }
`;

/* ── Slider ── */
const SliderWrap = styled.div`
  position: relative;
  padding: 0;
`;

const Track = styled.div`
  position: relative;
  height: 2px;
  background: rgba(20, 20, 20, 0.15);
`;

const TrackFill = styled.div<{ $pct: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--accent);
  width: ${({ $pct }) => $pct}%;
  transition: width 0.3s ease;
`;

const DotsRow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.button<{ $active: boolean; $filled: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid
    ${({ $filled }) => ($filled ? "#141414" : "rgba(20,20,20,0.25)")};
  background: ${({ $active }) => ($active ? "#141414" : "#E9FC87")};
  cursor: pointer;
  flex-shrink: 0;
  transform: ${({ $active }) => ($active ? "scale(1.5)" : "scale(1)")};
  transition: all 0.2s ease;
  &:hover {
    border-color: #141414;
    transform: scale(1.3);
  }
`;

const LabelsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.9rem;
`;

const StepLabel = styled.button<{ $active: boolean }>`
  font-size: 0.62rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  color: ${({ $active }) => ($active ? "#141414" : "rgba(20,20,20,0.45)")};
  text-align: center;
  width: 52px;
  line-height: 1.3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
  &:hover {
    color: #141414;
  }
`;

/* ── Response ── */
const popIn = keyframes`
  from { transform: scale(0.85); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
`;

const ResponseWrap = styled.div`
  animation: ${popIn} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;

const ResponseText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: rgba(255, 254, 236, 0.75);
  line-height: 1.55;

  em {
    font-style: italic;
    color: var(--accent);
    font-weight: 600;
  }
`;

/* ── Data ── */
const STEPS = [
  {
    label: "a couple",
    response:
      "Ha — not quite. I've had a <em>few</em> more conversations than that.",
  },
  {
    label: "about 20",
    response:
      "Getting warmer! But I've been doing this a <em>wee bit</em> longer than that.",
  },
  {
    label: "42",
    response:
      "That may be the secret of the universe...But alas, not quite the answer here.",
  },
  {
    label: "70+",
    response:
      "You got it! <em>70+ user feedback sessions</em> and counting — every single one taught me something.",
  },
  {
    label: "over 150",

    response: "I'm flattered — but the answer is <em>70+</em>.",
  },
];

const FeedbackGuessCard: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [sparkleKey, setSparkleKey] = useState(0);

  const handleSelect = useCallback((idx: number) => {
    setSelected(idx);
    if (idx === 3) setSparkleKey((k) => k + 1);
  }, []);

  const fillPct = selected === null ? 0 : (selected / (STEPS.length - 1)) * 100;
  const isCorrect = selected === 3;

  return (
    <Wrap>
      {isCorrect && <SparkleLayer runKey={sparkleKey} />}

      <CardQuestion>
        Guess how many <em>user feedback sessions</em> I've conducted.
      </CardQuestion>

      <SliderWrap>
        <Track>
          <TrackFill $pct={fillPct} />
          <DotsRow>
            {STEPS.map((_, i) => (
              <Dot
                key={i}
                $active={selected === i}
                $filled={selected !== null && i <= selected}
                onClick={() => handleSelect(i)}
                aria-label={STEPS[i].label}
              />
            ))}
          </DotsRow>
        </Track>
        <LabelsRow>
          {STEPS.map((step, i) => (
            <StepLabel
              key={i}
              $active={selected === i}
              onClick={() => handleSelect(i)}
            >
              {step.label}
            </StepLabel>
          ))}
        </LabelsRow>
      </SliderWrap>

      {selected !== null && (
        <ResponseWrap key={selected}>
          <ResponseText
            dangerouslySetInnerHTML={{ __html: STEPS[selected].response }}
          />
        </ResponseWrap>
      )}
    </Wrap>
  );
};

export default FeedbackGuessCard;

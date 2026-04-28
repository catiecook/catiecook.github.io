import React, { useState } from "react";
import styled from "styled-components";

interface Role {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

const roles: Role[] = [
  {
    id: 1,
    title: "Technical Product Manager",
    company: "Valarian",
    period: "2025 — Present",
    description:
      "Own the product roadmap for a FedRAMP/IL5-compliant AI and secure collaboration platform. Make trade-off decisions across government and commercial workstreams, define competitive GTM positioning, and lead cross-functional alignment across engineering, design, and leadership to drive quarterly OKR execution.",
    tags: [
      "FedRAMP / IL5",
      "AI Products",
      "Gov & Commercial",
      "GTM Strategy",
      "OKRs",
    ],
  },
  {
    id: 3,
    title: "Technical Product Manager",
    company: "FairComp",
    period: "2022 — 2024",
    description:
      "Transformed how users access verified compensation data. Launched multiple core features within a 9-month period using a data-first approach. Increased conversion rates by 8.4x",
    tags: ["Product Strategy", "Data Analytics", "User Research"],
  },
  {
    id: 4,
    title: "Founding Frontend Engineer",
    company: "FairComp",
    period: "2022 — 2024",
    description:
      "Built the core frontend from the ground up at an early-stage startup. Conducted 70+ user interviews to shape the product roadmap and feature prioritization.",
    tags: ["React", "TypeScript", "User Interviews"],
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Continuum",
    period: "2022 — 2024",
    description:
      "Led product development for a B2B contract management platform. Defined roadmap, wrote specs, and partnered with engineering and design to ship iteratively.",
    tags: ["Roadmapping", "B2B SaaS", "Agile"],
  },
  {
    id: 6,
    title: "Founding Engineer",
    company: "Continuum",
    period: "2020 — 2024",
    description:
      "Architected and built core product features as one of the first engineers. Wore multiple hats across engineering, design, and product.",
    tags: ["Full Stack", "Architecture", "Startup"],
  },
  {
    id: 7,
    title: "Frontend Engineer",
    company: "Amazon",
    period: "2018 — 2020",
    description:
      "Developed and maintained consumer-facing features for Amazon retail. Collaborated with cross-functional teams across multiple geographies.",
    tags: ["React", "A/B Testing", "Scale"],
  },
  {
    id: 8,
    title: "Systems Development Engineer",
    company: "Amazon Web Services",
    period: "2016 — 2018",
    description:
      "Built internal tooling and automation for AWS infrastructure teams. Focused on reliability, monitoring, and developer experience.",
    tags: ["AWS", "Automation", "Infrastructure"],
  },
  {
    id: 9,
    title: "Olympic Snowboard Judge",
    company: "The World",
    period: "Various",
    description: "Olympic level freestyle snowboard judge.",
    tags: ["Leadership", "Nerdiness", "Mountains"],
  },
];

const Section = styled.section`
  padding: 7rem 3rem;
  background-color: #141414;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1.5rem;
`;

const SectionLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--cream);
`;

const RoleList = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleItem = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.75rem 0;
  cursor: pointer;
`;

const RoleTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: baseline;
`;

const RoleLeft = styled.div``;

const RoleTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--cream);
  margin-bottom: 0.25rem;
  transition: color 0.2s ease;

  ${RoleItem}:hover & {
    color: var(--accent);
  }
`;

const RoleCompany = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--accent);
`;

const RolePeriod = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
`;

const RoleBody = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  padding-top: 1.25rem;
`;

const RoleDescription = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 1rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.65rem;
`;

const Chevron = styled.span<{ $open: boolean }>`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  display: inline-block;
  margin-left: 1rem;
`;

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <Section id="experience">
      <SectionHeader>
        <SectionLabel>Career</SectionLabel>
        <SectionTitle>Experience</SectionTitle>
      </SectionHeader>
      <RoleList>
        {roles.map((role) => {
          const isOpen = openId === role.id;
          return (
            <RoleItem
              key={role.id}
              $open={isOpen}
              onClick={() => toggle(role.id)}
            >
              <RoleTop>
                <RoleLeft>
                  <RoleTitle>
                    {role.title} — <RoleCompany>{role.company}</RoleCompany>
                    <Chevron $open={isOpen}>▾</Chevron>
                  </RoleTitle>
                </RoleLeft>
                <RolePeriod>{role.period}</RolePeriod>
              </RoleTop>
              <RoleBody $open={isOpen}>
                <RoleDescription>{role.description}</RoleDescription>
                <TagRow>
                  {role.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>
              </RoleBody>
            </RoleItem>
          );
        })}
      </RoleList>
    </Section>
  );
};

export default Experience;

import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  padding: 5rem 3rem 3rem;
  border-top: 1px solid var(--light-gray);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Left = styled.div``;

const ContactLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 1.5rem;
`;

const ContactHeadline = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--black);
  margin-bottom: 2rem;

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

const EmailLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--black);
  border-bottom: 2px solid var(--black);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialLink = styled.a`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--black);
  }

  &:hover::after {
    width: 100%;
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: var(--gray);
  font-weight: 400;
`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterSection id="contact">
      <Left>
        <ContactLabel>Get in Touch</ContactLabel>
        <ContactHeadline>
          Let's build something <em>great</em> together.
        </ContactHeadline>
        <EmailLink href="mailto:hello@catiecook.com">
          hello@catiecook.com
        </EmailLink>
      </Left>
      <Right>
        <SocialLinks>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </SocialLink>
          <SocialLink
            href="https://instagram.com/catiecook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </SocialLink>
        </SocialLinks>
        <Copyright>© {year} Catie Cook. All rights reserved.</Copyright>
      </Right>
    </FooterSection>
  );
};

export default Footer;

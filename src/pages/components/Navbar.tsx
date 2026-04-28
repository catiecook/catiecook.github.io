import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: ${({ $scrolled }) => ($scrolled ? 'var(--cream)' : 'transparent')};
  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid var(--light-gray)' : 'none')};
  transition: background-color 0.3s ease, border-bottom 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--black);
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.2s ease;
  z-index: 110;

  &:hover {
    color: var(--accent);
  }
`;

const NavLinks = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    inset: 0;
    background-color: var(--cream);
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    z-index: 105;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--black);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--black);
      transition: width 0.25s ease;
    }

    &:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  z-index: 110;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: var(--black);
    transition: transform 0.25s ease, opacity 0.25s ease;

    &:nth-child(1) {
      transform: ${({ $open }) => ($open ? 'translateY(6.5px) rotate(45deg)' : 'none')};
    }
    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ $open }) => ($open ? 'translateY(-6.5px) rotate(-45deg)' : 'none')};
    }
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Nav $scrolled={scrolled || menuOpen}>
      <Logo href="#">Catie Cook</Logo>
      <NavLinks $open={menuOpen}>
        <NavLink><a href="#work" onClick={closeMenu}>Work</a></NavLink>
        <NavLink><a href="#about" onClick={closeMenu}>About</a></NavLink>
        <NavLink><a href="#experience" onClick={closeMenu}>Experience</a></NavLink>
        <NavLink><a href="#contact" onClick={closeMenu}>Contact</a></NavLink>
      </NavLinks>
      <Hamburger $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

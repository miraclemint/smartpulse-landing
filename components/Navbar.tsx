'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'ฟีเจอร์',  href: '#features'  },
  { label: 'วิธีใช้',   href: '#how-it-works' },
  { label: 'รับรอง',   href: '#stats'      },
  { label: 'ติดต่อ',   href: '#contact'    },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav suppressHydrationWarning style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(11,31,58,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <a href="#" onClick={e => scrollTo(e, 'body')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #0B1F3A, #00C4D4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💓</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: '-0.3px' }}>Smart Pulse</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>by Medicore · Korea</div>
          </div>
        </a>

        {/* Links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 500,
                transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
              {l.label}
            </a>
          ))}
          <motion.a href="#contact" onClick={e => scrollTo(e, '#contact')}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ background: '#00C4D4', color: '#fff', fontWeight: 700, fontSize: 14,
              padding: '10px 22px', borderRadius: 10, textDecoration: 'none', display: 'inline-block' }}>
            สั่งซื้อ
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

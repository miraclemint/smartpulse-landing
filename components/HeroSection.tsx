'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Chip = ({ label, value, color, delay }: { label: string; value: string; color: string; delay: number }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    style={{
      background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.14)', borderRadius: 16,
      padding: '12px 20px', minWidth: 140,
    }}
  >
    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
  </motion.div>
);

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const deviceY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section suppressHydrationWarning style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      background: 'linear-gradient(160deg, #071428 0%, #0B1F3A 50%, #0d3550 100%)',
    }}>
      {/* Orbit video — subtle background loop */}
      <video autoPlay loop muted playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.1, pointerEvents: 'none' }}>
        <source src="/images/sp-orbit.mp4" type="video/mp4" />
      </video>

      {/* BG orbs */}
      <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity }}
        style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          top: -200, right: -200, pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(0,196,212,0.1) 0%, transparent 70%)' }} />

      <div className="container" style={{ paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 10 }}>
        <div className="grid-2" style={{ gap: 60 }}>

          {/* LEFT */}
          <motion.div style={{ y: textY, opacity }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#00C4D4', background: 'rgba(0,196,212,0.1)',
                border: '1px solid rgba(0,196,212,0.28)', borderRadius: 100,
                padding: '6px 16px', marginBottom: 28,
              }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C4D4', display: 'inline-block' }} />
                นวัตกรรมจาก Medicore · South Korea
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ fontSize: 'clamp(42px, 5vw, 72px)', fontWeight: 900, color: '#fff',
                lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 24 }}>
              วัดสุขภาพ<br />
              <span style={{ color: '#00C4D4' }}>ใน 60 วินาที</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 440, marginBottom: 40 }}>
              อุปกรณ์ตรวจวัดหัวใจและหลอดเลือดแบบพกพา ประเมินความเครียดได้ครบจบ
              <strong style={{ color: 'rgba(255,255,255,0.9)' }}> ไม่ต้องเจาะเลือด</strong>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
              <motion.a href="mailto:u.tharin@gmail.com"
                whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(0,196,212,0.5)' }}
                whileTap={{ scale: 0.97 }}
                style={{ background: '#00C4D4', color: '#fff', fontWeight: 800, fontSize: 15,
                  padding: '15px 34px', borderRadius: 12, letterSpacing: '-0.2px',
                  textDecoration: 'none', display: 'inline-block' }}>
                สั่งซื้อ / ขอข้อมูล
              </motion.a>
              <motion.a href="tel:+66894443424"
                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                style={{ color: '#fff', fontWeight: 700, fontSize: 15, padding: '15px 34px',
                  borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.22)',
                  textDecoration: 'none', display: 'inline-block' }}>
                📞 089-444-3424
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['CE', 'FCC', 'CFDA', 'GMP'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,196,212,0.15)',
                    border: '1px solid rgba(0,196,212,0.4)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 9, color: '#00C4D4', fontWeight: 800 }}>✓</div>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>{b} Certified</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — product photo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,196,212,0.18) 0%, transparent 70%)',
              pointerEvents: 'none' }} />

            <motion.div
              style={{ y: deviceY }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <Image src="/images/sp01.png" alt="SmartPulse Device"
                width={400} height={400} priority
                style={{ filter: 'drop-shadow(0 40px 80px rgba(0,196,212,0.4))', maxWidth: '100%' }} />
            </motion.div>

            {/* Chips — hidden on mobile */}
            <motion.div className="hero-chip" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
              style={{ position: 'absolute', top: 20, left: -20 }}>
              <Chip label="Heart Rate" value="72 bpm" color="#FF6B6B" delay={0} />
            </motion.div>
            <motion.div className="hero-chip" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}
              style={{ position: 'absolute', top: '42%', right: -20 }}>
              <Chip label="HRV Score" value="68 ms" color="#00C4D4" delay={1} />
            </motion.div>
            <motion.div className="hero-chip" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
              style={{ position: 'absolute', bottom: 10, left: -10 }}>
              <Chip label="Stress Level" value="Low ✓" color="#4ADE80" delay={2} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        <div style={{ width: 20, height: 32, borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.2)',
          display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 4, height: 8, borderRadius: 2, background: '#00C4D4' }} />
        </div>
      </motion.div>
    </section>
  );
};

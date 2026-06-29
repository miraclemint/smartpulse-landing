'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { n: '60', u: 'วิ', label: 'รู้ผลทันที', icon: '⚡', color: '#FFD60A' },
  { n: '10+', u: '', label: 'ค่าสุขภาพ', icon: '📈', color: '#00C4D4' },
  { n: '7', u: '', label: 'Type หลอดเลือด', icon: '🩸', color: '#FF6B6B' },
  { n: '0', u: '', label: 'เจาะเลือด', icon: '✨', color: '#4ADE80' },
];

const certs = [
  { code: 'CE', sub: 'European Medical Device' },
  { code: 'FCC', sub: 'RF Safety Approved' },
  { code: 'CFDA', sub: 'China Market Listed' },
  { code: 'GMP', sub: 'Manufacturing Standard' },
];

const uses = [
  { icon: '🏥', t: 'คลินิก / โรงพยาบาล' },
  { icon: '🏢', t: 'HR / สวัสดิการองค์กร' },
  { icon: '🏋️', t: 'Fitness & Wellness' },
  { icon: '👨‍👩‍👧', t: 'ดูแลสุขภาพครอบครัว' },
];

export const StatsSection = () => (
  <section id="stats" suppressHydrationWarning style={{ background: '#0B1F3A', padding: '112px 0', position: 'relative', overflow: 'hidden' }}>
    {/* BG decoration — no image, pure CSS */}
    <div style={{ position: 'absolute', right: -100, top: '50%', transform: 'translateY(-50%)',
      width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
      background: 'radial-gradient(circle, rgba(0,196,212,0.07) 0%, transparent 70%)' }} />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 72 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: '#00C4D4', background: 'rgba(0,196,212,0.12)', padding: '6px 16px',
          borderRadius: 100, display: 'inline-block', marginBottom: 20,
          border: '1px solid rgba(0,196,212,0.25)' }}>ทำไมต้อง SmartPulse</span>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#fff',
          letterSpacing: '-1px', marginBottom: 16, lineHeight: 1.1 }}>อุปกรณ์เดียว วัดได้ทุกอย่าง</h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
          บียอนด์ บริการเช็คสุขภาพ — นวัตกรรมจากเกาหลี
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid-4" style={{ gap: 16, marginBottom: 56 }}>
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, background: 'rgba(255,255,255,0.08)' }}
            style={{ textAlign: 'center', padding: '36px 20px', borderRadius: 20,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
              transition: 'all 0.2s' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 8, letterSpacing: '-1px' }}>
              {s.n}<span style={{ fontSize: 22 }}>{s.u}</span>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Use cases */}
      <div className="grid-4" style={{ gap: 12, marginBottom: 56 }}>
        {uses.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ background: 'rgba(0,196,212,0.12)', borderColor: 'rgba(0,196,212,0.35)', y: -4 }}
            style={{ textAlign: 'center', padding: '28px 16px', borderRadius: 16,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s' }}>
            <div style={{ fontSize: 30, marginBottom: 10 }}>{u.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.65)' }}>{u.t}</div>
          </motion.div>
        ))}
      </div>

      {/* Certs */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.1 }}
        style={{ borderRadius: 28, padding: '48px', background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)' }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 36, letterSpacing: '-0.3px' }}>
          มาตรฐานสากล · เชื่อถือได้
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, marginBottom: 36 }}>
          {certs.map((c, i) => (
            <motion.div key={i} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,196,212,0.2))',
                border: '1px solid rgba(0,196,212,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: '#00C4D4' }}>{c.code}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{c.code} Certified</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{c.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Manufactured by Medicore Co., Ltd.</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>South Korea · ISO 13485 · นวัตกรรมจากเกาหลี</div>
        </div>
      </motion.div>
    </div>
  </section>
);

'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { n: '01', icon: '👆', title: 'วางนิ้วบนเซนเซอร์', desc: 'วางปลายนิ้วบน SmartPulse ให้แนบสนิท ไม่ต้องเจาะเลือด ไม่เจ็บ' },
  { n: '02', icon: '⏱️', title: 'สแกน 60 วินาที', desc: 'อุปกรณ์วิเคราะห์หัวใจและหลอดเลือดอย่างครบถ้วนในนาทีเดียว' },
  { n: '03', icon: '📲', title: 'ซิงค์ Bluetooth', desc: 'ส่งผลไปยังสมาร์ทโฟนทันที รองรับทั้ง iOS และ Android' },
  { n: '04', icon: '📋', title: 'รับรายงานสุขภาพ', desc: 'ดูผลละเอียดพร้อมคำแนะนำ ติดตามพัฒนาการระยะยาวผ่าน cloud' },
];

const DeviceIllustration = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
    {/* Device body */}
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {/* Glow */}
      <div style={{ position: 'absolute', inset: -30, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,196,212,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Body */}
      <div style={{
        width: 140, height: 100, borderRadius: 22,
        background: 'linear-gradient(145deg, #1e2d40, #0d1f32)',
        border: '2px solid rgba(255,255,255,0.1)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
        position: 'relative',
      }}>
        {/* Screen */}
        <div style={{ width: 80, height: 44, borderRadius: 8, background: '#0a1525',
          border: '1px solid rgba(0,196,212,0.3)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: 6 }}>
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: 16, fontWeight: 900, color: '#00C4D4', lineHeight: 1 }}>68</motion.div>
          <div style={{ fontSize: 7, color: 'rgba(0,196,212,0.6)', fontWeight: 600, marginTop: 2 }}>SMART PULSE</div>
        </div>
        {/* Sensor dot */}
        <div style={{ position: 'absolute', bottom: 10, right: 12, width: 14, height: 14, borderRadius: '50%',
          background: '#FF6B6B', boxShadow: '0 0 8px rgba(255,107,107,0.7)' }} />
      </div>
    </motion.div>

    {/* Scan time badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} transition={{ delay: 0.4 }}
      style={{ background: 'linear-gradient(135deg, #0B1F3A, #00C4D4)',
        borderRadius: 20, padding: '18px 40px', textAlign: 'center',
        boxShadow: '0 16px 48px rgba(0,196,212,0.3)' }}
    >
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>เวลาสแกน</div>
      <div style={{ fontSize: 44, fontWeight: 900, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
        60 <span style={{ fontSize: 20, fontWeight: 600 }}>วิ</span>
      </div>
    </motion.div>

    {/* Bluetooth wave */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div key={i}
          animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.12 }}
          style={{ width: 4, height: 20 + i * 6, borderRadius: 2,
            background: '#00C4D4', transformOrigin: 'bottom' }} />
      ))}
      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginLeft: 8 }}>Bluetooth Sync</span>
    </div>
  </div>
);

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgOp = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const imgX = useTransform(scrollYProgress, [0.1, 0.5], [-40, 0]);

  return (
    <section id="how-it-works" suppressHydrationWarning ref={ref} style={{ background: '#F8FAFC', padding: '112px 0', overflow: 'hidden' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 80 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#00C4D4', background: 'rgba(0,196,212,0.08)', padding: '6px 16px',
            borderRadius: 100, display: 'inline-block', marginBottom: 20 }}>วิธีใช้งาน</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#0B1F3A',
            letterSpacing: '-1px', marginBottom: 16, lineHeight: 1.1 }}>ง่ายแค่ 4 ขั้นตอน</h2>
          <p style={{ fontSize: 17, color: '#64748B', lineHeight: 1.6 }}>ไม่ต้องมีความรู้ทางการแพทย์ — เริ่มวัดได้ทันที</p>
        </motion.div>

        <div className="grid-2" style={{ gap: 80 }}>
          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {steps.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}>
                <motion.div whileHover={{ x: 6, background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', gap: 20, padding: '22px 24px', borderRadius: 20,
                    background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)', cursor: 'default' }}>
                  <div style={{ width: 54, height: 54, borderRadius: 18, flexShrink: 0,
                    background: 'linear-gradient(135deg, #0B1F3A, #00C4D4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                    boxShadow: '0 8px 24px rgba(0,196,212,0.25)' }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#00C4D4',
                      letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>STEP {s.n}</div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: '#0B1F3A', marginBottom: 5, letterSpacing: '-0.2px' }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: '#64748B', lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Product photo */}
          <motion.div style={{ opacity: imgOp, x: imgX,
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,196,212,0.12) 0%, transparent 70%)',
              pointerEvents: 'none' }} />
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <Image src="/images/sp02.png" alt="SmartPulse Device"
                width={380} height={380}
                style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.15))', maxWidth: '100%' }} />
            </motion.div>
            {/* 60s badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              style={{ position: 'absolute', bottom: 0, right: 0,
                background: 'linear-gradient(135deg, #0B1F3A, #00C4D4)',
                borderRadius: 20, padding: '14px 28px', textAlign: 'center',
                boxShadow: '0 16px 40px rgba(0,196,212,0.3)' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 2 }}>สแกนภายใน</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-1px' }}>
                60<span style={{ fontSize: 16, fontWeight: 600 }}> วิ</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

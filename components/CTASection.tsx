'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const CTASection = () => (
  <section suppressHydrationWarning style={{ background: '#fff', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,196,212,0.07) 0%, transparent 70%)',
      pointerEvents: 'none' }} />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      {/* Product video row */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="grid-2" style={{ gap: 72, alignItems: 'center', marginBottom: 96 }}>

        {/* Video */}
        <div style={{ borderRadius: 28, overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(11,31,58,0.15)', position: 'relative' }}>
          <video autoPlay loop muted playsInline
            style={{ width: '100%', display: 'block', borderRadius: 28 }}>
            <source src="/images/sp-product.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text */}
        <div>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#00C4D4', background: 'rgba(0,196,212,0.08)', padding: '6px 16px',
            borderRadius: 100, display: 'inline-block', marginBottom: 24 }}>Smart Pulse Device</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 900, color: '#0B1F3A',
            letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
            ออกแบบมาเพื่อ<br />ความแม่นยำสูงสุด
          </h2>
          <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.7, marginBottom: 32 }}>
            เซนเซอร์ PPG ความแม่นยำสูง วิเคราะห์สัญญาณหัวใจและหลอดเลือดด้วย AI
            แสดงผล real-time ผ่านแอปสมาร์ทโฟน รองรับ iOS & Android
          </p>
          {[
            { icon: '⚡', t: 'ผลทันทีใน 60 วินาที' },
            { icon: '🔵', t: 'Bluetooth 4.0 — ไม่มีสาย' },
            { icon: '📊', t: 'รายงานละเอียด 10+ ค่า' },
            { icon: '🔋', t: 'แบตเตอรี่ใช้งานได้นาน' },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10,
                background: 'rgba(0,196,212,0.1)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{f.icon}</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{f.t}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA block */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 900, color: '#0B1F3A',
          letterSpacing: '-2px', lineHeight: 1.05, marginBottom: 20 }}>
          พร้อมดูแล<br />สุขภาพของคุณ?
        </h2>
        <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.65, marginBottom: 48 }}>
          กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
          <motion.a href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 20px 48px rgba(0,196,212,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{ background: 'linear-gradient(135deg, #00C4D4, #00A3B4)', color: '#fff',
              fontWeight: 800, fontSize: 16, padding: '17px 42px', borderRadius: 14,
              display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            ✉️ ติดต่อเรา / สอบถามราคา
          </motion.a>
        </div>

        {/* Product card with sp03 image */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 20, padding: '16px 28px',
            borderRadius: 20, background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
          <Image src="/images/sp03.png" alt="SmartPulse" width={56} height={56}
            style={{ objectFit: 'contain' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0B1F3A' }}>Smart Pulse</div>
            <div style={{ fontSize: 12, color: '#94A3B8' }}>by Medicore · South Korea</div>
          </div>
          <div style={{ width: 1, height: 36, background: '#E2E8F0' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 12, color: '#94A3B8' }}>จำหน่ายโดย</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0B1F3A' }}>Biofeedback Thailand</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
